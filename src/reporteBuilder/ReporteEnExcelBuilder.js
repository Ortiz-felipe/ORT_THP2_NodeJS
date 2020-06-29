import ExcelJS from 'exceljs';

class ReporteEnExcelBuilder {
  constructor() {
    this.workbook = new ExcelJS.Workbook();
  }

  crearPagina(nombreDePagina) {
    let worksheet = this.workbook.getWorksheet(nombreDePagina);
    if (!worksheet) {
      worksheet = this.workbook.addWorksheet(nombreDePagina);
    } else {
      throw new Error('nombre de pagina ya existe');
    }
  }

  getWorksheet(nombreDePagina) {
    const worksheet = this.workbook.getWorksheet(nombreDePagina);
    if (!worksheet) {
      throw new Error('nombre de pagina invalido');
    }
    return worksheet;
  }

  escribirEnFila(nombreDePagina, filaDesde, colDesde, contenido) {
    const worksheet = this.getWorksheet(nombreDePagina);

    if (contenido) {
      for (let i = 0; i < contenido.length; i++) {
        const cell = worksheet.getCell(filaDesde, colDesde + i);
        cell.value = contenido[i];
      }
    }
  }

  escribirEnColumna(nombreDePagina, filaDesde, colDesde, contenido) {
    const worksheet = this.getWorksheet(nombreDePagina);

    if (contenido) {
      for (let i = 0; i < contenido.length; i++) {
        const cell = worksheet.getCell(filaDesde + i, colDesde);
        cell.value = contenido[i];
      }
    }
  }

  async guardarArchivo(filePath) {
    await this.workbook.xlsx.writeFile(filePath);
  }
}

export default ReporteEnExcelBuilder;
