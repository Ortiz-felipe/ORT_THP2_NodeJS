import Attachment from '../models/Attachment.js';
import Email from '../models/Email.js';

export default class GeneradorReporte {
  constructor(reporteDirectorExcel, excelBuilder, repoCanchas, repoReservas, emailService, cotizador) {
    this.reporteDirectorExcel = reporteDirectorExcel;
    this.excelBuilder = excelBuilder;
    this.repoCanchas = repoCanchas;
    this.repoReservas = repoReservas;
    this.emailService = emailService;
    this.cotizador = cotizador;
  }

  async _obtenerDatosColumnasCanchas() {
    const columnasCanchas = await this._generarColumnasCanchas();
    await this._llenarDatosColumnasCanchas(columnasCanchas);
    return columnasCanchas;
  }

  async _generarColumnasCanchas() {
    const columnasCanchas = [];
    const canchas = await this.repoCanchas.obtenerTodas();
    const cant = canchas.length;
    for (let i = 0; i < cant; i++) {
      columnasCanchas.push(this._getColumnaCancha(i + 1));
    }
    return columnasCanchas;
  }

  _getColumnaCancha(nroCancha) {
    return [`cancha ${nroCancha}`, 0, 0, 0, 0, 0, 0, 0];
  }

  async _llenarDatosColumnasCanchas(columnasCanchas) {
    const canchas = await this.repoCanchas.obtenerTodas();
    const idPrimeraCancha = canchas[0].id;
    const reservasDelMes = await this.repoReservas.obtenerTodas();
    for (const r of reservasDelMes) {
      if (this._esReservaDelMesActual(r.fecha)) {
        if (r.fecha.getDay() + 1 == 1) {
          columnasCanchas[r.canchaId - idPrimeraCancha][1]++;
        } else if (r.fecha.getDay() + 1 == 2) {
          columnasCanchas[r.canchaId - idPrimeraCancha][2]++;
        } else if (r.fecha.getDay() + 1 == 3) {
          columnasCanchas[r.canchaId - idPrimeraCancha][3]++;
        } else if (r.fecha.getDay() + 1 == 4) {
          columnasCanchas[r.canchaId - idPrimeraCancha][4]++;
        } else if (r.fecha.getDay() + 1 == 5) {
          columnasCanchas[r.canchaId - idPrimeraCancha][5]++;
        } else if (r.fecha.getDay() + 1 == 6) {
          columnasCanchas[r.canchaId - idPrimeraCancha][6]++;
        } else if (r.fecha.getDay() + 1 == 7) {
          columnasCanchas[r.canchaId - idPrimeraCancha][7]++;
        }
      }
    }
  }

  _esReservaDelMesActual(fechaReserva) {
    let esReservaDelMesActual = false;
    const date = new Date();
    const month = date.getMonth();
    if (fechaReserva.getMonth() == month) {
      esReservaDelMesActual = true;
    }
    return esReservaDelMesActual;
  }

  async _obtenerFilaGananciaPesos() {
    const pesos = await this._obtenerGananciaPesos();
    return ['Ganancia en pesos del mes: ', pesos];
  }

  async _obtenerGananciaPesos() {
    let gananciaPesos = 0;
    const reservasDelMes = await this.repoReservas.obtenerTodas();
    for (const r of reservasDelMes) {
      let i = 0;
      let encontrado = false;
      const canchas = await this.repoCanchas.obtenerTodas();
      while (i < canchas.length && !encontrado) {
        if (r.canchaId == canchas[i].id) {
          gananciaPesos += canchas[i].precio;
          encontrado = true;
        }
        i++;
      }
      // gananciaPesos += r.precioFinal;
    }
    return gananciaPesos;
  }

  async _obtenerFilaGananciaDolares() {
    const pesos = await this._obtenerGananciaPesos();
    const dolares = await this._obtenerGananciaDolares(pesos);
    return ['Ganancia en dolares del mes: ', dolares];
  }

  async _obtenerGananciaDolares(pesos) {
    const dolares = await this.cotizador.convertirPesosADolares(pesos);
    return dolares;
  }

  async ejecutar() {
    this.canchas = await this._obtenerDatosColumnasCanchas();
    this.gananciaPesos = await this._obtenerFilaGananciaPesos();
    this.gananciaDolares = await this._obtenerFilaGananciaDolares();

    await this.reporteDirectorExcel.build({
      builder: this.excelBuilder,
      nombreReporte: 'Reporte Semanal de Canchas',
      canchas: this.canchas,
      outputPath: './reporte.xlsx',
      contenidoPesos: this.gananciaPesos,
      contenidoDolares: this.gananciaDolares,
    });

    const attachment = new Attachment('reporte.xlsx', './reporte.xlsx', 'text');
    const email = new Email('ioelchejas2020@gmail.com', 'reporte', 'le adjunto el reporte');
    email.attachments.push(attachment.getAttachment());

    try {
      await this.emailService.sendMail(email);
    } catch (e) {
      console.log(e);
    }
  }
}
