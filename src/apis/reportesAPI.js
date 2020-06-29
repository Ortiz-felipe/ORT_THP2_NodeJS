import GeneradorExcel from '../CasosDeUso/CUGenerarReporte.js';
import ReporteDeCanchasDirector from '../reporteBuilder/ReporteDeCanchasDirector.js';
import ReporteEnExcelBuilder from '../reporteBuilder/ReporteEnExcelBuilder.js';
import CreadorCotizador from '../cotizador/factoryCotizador.js';
import MailingFactory from '../EmailModule/MailingFactory.js';
import CanchaRepositoryFactory from '../repository/CanchaRepositoryFactory.js';
import ReservasRepositoryFactory from '../repository/ReservasRepositoryFactory.js';

const canchasRepository = CanchaRepositoryFactory.create();
const reservasRepository = ReservasRepositoryFactory.create();

function getReportesApi() {
  async function generarReporteMensual() {
    try {
      const director = new ReporteDeCanchasDirector();
      const excelBuilder = new ReporteEnExcelBuilder();
      const emailFactory = new MailingFactory();
      const emailService = emailFactory.getMailingService();
      const cotizador = new CreadorCotizador().getCotizador();
      const generadorExcel = new GeneradorExcel(
        director, excelBuilder, canchasRepository, reservasRepository, emailService, cotizador,
      );
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
