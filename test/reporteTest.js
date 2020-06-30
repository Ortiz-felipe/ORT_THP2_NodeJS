import GeneradorExcel from '../src/CasosDeUso/CUGenerarReporte.js';
import ReporteDeCanchasDirector from '../src/reporteBuilder/ReporteDeCanchasDirector.js';
import ReporteEnExcelBuilder from '../src/reporteBuilder/ReporteEnExcelBuilder.js';
import CreadorCotizador from '../src/cotizador/factoryCotizador.js';
import MailingFactory from '../src/EmailModule/MailingFactory.js';
import CanchaRepositoryFactory from '../src/repository/CanchaRepositoryFactory.js';
import ReservasRepositoryFactory from '../src/repository/ReservasRepositoryFactory.js';

const canchasRepository = CanchaRepositoryFactory.create();
const reservasRepository = ReservasRepositoryFactory.create();

async function reporteTest() {
  const director = new ReporteDeCanchasDirector();
  const excelBuilder = new ReporteEnExcelBuilder();
  const emailFactory = new MailingFactory();
  const emailService = emailFactory.getMailingService();
  const cotizador = new CreadorCotizador().getCotizador();
  const generadorExcel = new GeneradorExcel(
    director, excelBuilder, canchasRepository, reservasRepository, emailService, cotizador,
  );
  await generadorExcel.ejecutar();
  console.log('EXCEL GENERADO CON EXITO ');
}
export default reporteTest;
