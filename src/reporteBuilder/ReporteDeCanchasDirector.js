const DIAS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const DIAS_DESDE_FILA = 2;
const DIAS_DESDE_COL = 1;

const CANCHAS_DESDE_FILA = 1;
const CANCHAS_DESDE_COL = 2;

const GANANCIA_PESOS_FILA = 11;
const GANANCIA_DOLARES_FILA = 12;

const GANANCIA_PESOS_COL_DESDE = 1;
const GANANCIA_DOLARES_COL_DESDE = 1;

class ReporteDeCanchasDirector {
  inicializar(builder, nombreReporte) {
    builder.crearPagina(nombreReporte);
  }

  escribirDiasDeLaSemana(builder, nombreReporte) {
    builder.escribirEnColumna(nombreReporte, DIAS_DESDE_FILA, DIAS_DESDE_COL, DIAS);
  }

  escribirDatosCanchas(builder, nombreReporte, canchas) {
    for (let i = 0; i < canchas.length; i++) {
      builder.escribirEnColumna(nombreReporte, CANCHAS_DESDE_FILA, CANCHAS_DESDE_COL + i, canchas[i]);
    }
  }

  escribirGananciaEnPesosDelMes(builder, nombreReporte, contenido) {
    builder.escribirEnFila(nombreReporte, GANANCIA_PESOS_FILA, GANANCIA_PESOS_COL_DESDE, contenido);
  }

  escribirGananciaEnDolaresDelMes(builder, nombreReporte, contenido) {
    builder.escribirEnFila(nombreReporte, GANANCIA_DOLARES_FILA, GANANCIA_DOLARES_COL_DESDE, contenido);
  }

  async build({
    builder, nombreReporte, canchas, outputPath, contenidoPesos, contenidoDolares,
  }) {
    this.inicializar(builder, nombreReporte);
    this.escribirDiasDeLaSemana(builder, nombreReporte);
    this.escribirDatosCanchas(builder, nombreReporte, canchas);
    this.escribirGananciaEnPesosDelMes(builder, nombreReporte, contenidoPesos);
    this.escribirGananciaEnDolaresDelMes(builder, nombreReporte, contenidoDolares);
    return await builder.guardarArchivo(outputPath);
  }
}

export default ReporteDeCanchasDirector;
