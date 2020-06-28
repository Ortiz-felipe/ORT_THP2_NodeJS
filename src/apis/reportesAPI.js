import getCanchasDAO from '../dao/CanchaDaoDb.js';
import getReservasDAO from '../dao/ReservaDaoDb.js';
import GeneradorExcel from '../CasosDeUso/CUGenerarReporte.js';
import ReporteDeCanchasDirector from '../reporteBuilder/ReporteDeCanchasDirector.js';
import ReporteEnExcelBuilder from '../reporteBuilder/ReporteEnExcelBuilder.js';
import CreadorCotizador from '../cotizador/factoryCotizador.js';
import MailingFactory from '../EmailModule/MailingFactory.js';

function getReportesApi() {
  const canchasDAO = getCanchasDAO();
  const reservasDAO = getReservasDAO();

  async function generarReporteMensual() {
    try {
      const director = new ReporteDeCanchasDirector();
      const excelBuilder = new ReporteEnExcelBuilder();
      const repoCanchas = canchasDAO;
      const RepoReservas = reservasDAO;
      const emailFactory = new MailingFactory();
      const emailService = emailFactory.getMailingService();
      const cotizador = new CreadorCotizador().getCotizador();
      const generadorExcel = new GeneradorExcel(director, excelBuilder, repoCanchas, RepoReservas, emailService, cotizador);
      await generadorExcel.ejecutar();
      return { status: 'ok' };
    } catch (e) {
      console.log(e);
    }
  }

  return {
    generarReporteMensual,
  };
}

export {
  getReportesApi,
};
