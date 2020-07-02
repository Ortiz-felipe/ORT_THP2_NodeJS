import Chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import ModuloReservasFactory from '../src/ModuloReservas/ModuloReservasFactory.js';
import CanchasFactory from '../src/apis/Canchas/CanchasFactory.js';
import Reserva from '../src/models/Reserva.js';
import Cancha from '../src/models/Cancha.js';

Chai.use(chaiAsPromised);

async function moduloReservasTest() {
  const canchas = CanchasFactory.create();
  const moduloReservas = await ModuloReservasFactory.create();

  const cancha = new Cancha('Pele', 55, 11);
  const canchaCreada = await canchas.crear(cancha);

  async function crear_conDiaFeriado_noCreaReserva() {
    const reserva = new Reserva('nancy', 'nancy@gmail.com', '2020-12-25', '95821465', canchaCreada.id);
    await Chai.assert.isRejected(moduloReservas.CU_crearReserva.run(reserva));
  }

  async function crear_conDiaNoferiado_creaReserva() {
    const reserva = new Reserva('nancy', 'nancy@gmail.com', '2020-12-23', '95821465', canchaCreada.id);
    const reservaCreada = await moduloReservas.CU_crearReserva.run(reserva);
    Chai.assert(!!reservaCreada, 'La reserva tiene que haberse creado.');
  }

  async function crear_conNombreInvalido_noCreaReserva() {
    const reserva = new Reserva(1456, 'nancy@gmail.com', '2020-12-23', '95821465', canchaCreada.id);
    await Chai.assert.isRejected(moduloReservas.CU_crearReserva.run(reserva));
  }

  async function crear_conFechaAnterior_noCreaReserva() {
    const reserva = new Reserva('pepe', 'nancy@gmail.com', '2020-03-24', '95821465', canchaCreada.id);
    await Chai.assert.isRejected(moduloReservas.CU_crearReserva.run(reserva));
  }

  async function confirmarReserva_reservaExistente() {
    const reserva = new Reserva('pepe', 'nancy@gmail.com', '2021-07-24', '95821465', canchaCreada.id);
    const reservaCreada = await moduloReservas.crear(reserva);

    await Chai.assert.isFulfilled(moduloReservas.CU_confirmarReserva.run(reservaCreada.id));
  }

  async function confirmarReserva_reservaNoExistente() {
    await Chai.assert.isRejected(moduloReservas.CU_confirmarReserva.run(100));
  }

  async function eliminarReserva_reservaExistente() {
    const reserva = new Reserva('pepe', 'nancy@gmail.com', '2020-12-23', '95821465', canchaCreada.id);
    const reservaCreada = await moduloReservas.crear(reserva);

    await Chai.assert.isFulfilled(moduloReservas.CU_eliminarReserva.run(reservaCreada.id));
  }

  async function eliminarReserva_reservaNoExistente() {
    await Chai.assert.isFulfilled(moduloReservas.CU_eliminarReserva.run(100));
  }

  await crear_conDiaFeriado_noCreaReserva();
  await crear_conDiaNoferiado_creaReserva();
  await crear_conNombreInvalido_noCreaReserva();
  await crear_conFechaAnterior_noCreaReserva();
  await confirmarReserva_reservaExistente();
  await confirmarReserva_reservaNoExistente();
  await eliminarReserva_reservaExistente();
  await eliminarReserva_reservaNoExistente();
  console.log('--------- Los test de moduloReservasTest pasaron correctamente ---------');
}

export default moduloReservasTest;
