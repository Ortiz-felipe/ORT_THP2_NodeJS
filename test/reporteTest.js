import GeneradorExcel from '../src/CasosDeUso/CUGenerarReporte.js';
import ReporteDeCanchasDirector from '../src/reporteBuilder/ReporteDeCanchasDirector.js';
import ReporteEnExcelBuilder from '../src/reporteBuilder/ReporteEnExcelBuilder.js';
import CreadorCotizador from '../src/cotizador/factoryCotizador.js';
import CanchaRepositoryFactory from '../src/repository/CanchaRepositoryFactory.js';
import ReservasRepositoryFactory from '../src/repository/ReservasRepositoryFactory.js';
import Cancha from '../src/models/Cancha.js';
import CanchasFactory from '../src/apis/Canchas/CanchasFactory.js';
import EmailServiceMock from './mock/EmailServiceMock.js';
import ReservasFactory from '../src/apis/reservas/ReservasFactory.js';
import Reserva from '../src/models/Reserva.js';

const canchasRepository = CanchaRepositoryFactory.create();
const reservasRepository = ReservasRepositoryFactory.create();
const canchas = CanchasFactory.create();

async function reporteTest() {
  const reservas = await ReservasFactory.create();
  const canchaCreada = await canchas.crear(new Cancha('Pele', 55, 11));
  await reservas.crear(new Reserva('reserva 1', 'test@test.com', '2022-03-20', '11111111', canchaCreada.id));
  const director = new ReporteDeCanchasDirector();
  const excelBuilder = new ReporteEnExcelBuilder();
  const emailService = new EmailServiceMock();
  const cotizador = new CreadorCotizador().getCotizador();
  const generadorExcel = new GeneradorExcel(
    director, excelBuilder, canchasRepository, reservasRepository, emailService, cotizador,
  );

  await generadorExcel.ejecutar();

  console.log('EXCEL GENERADO CON EXITO ');
}
export default reporteTest;
