import ModuloReservasFactory from '../src/ModuloReservas/ModuloReservasFactory.js';
import ModuloCanchasFactory from '../src/ModuloCanchas/ModuloCanchasFactory.js';
import Reserva from '../src/models/Reserva.js';
import Cancha from '../src/models/Cancha.js';

async function moduloReservasTest() {
  const moduloCanchas = ModuloCanchasFactory.create();
  const moduloReservas = await ModuloReservasFactory.create(moduloCanchas);

  const cancha = new Cancha('Pele', 55, 11);
  const canchaCreada = await moduloCanchas.crear(cancha);

  async function crear_conDiaFeriado_noCreaReserva() {
    const reserva = new Reserva('nancy', 'nancy@gmail.com', '2020-12-25', '95821465', canchaCreada.id);
    try {
      await moduloReservas.crear(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function crear_conDiaNoferiado_creaReserva() {
    const reserva = new Reserva('nancy', 'nancy@gmail.com', '2020-12-23', '95821465', canchaCreada.id);
    try {
      await moduloReservas.crear(reserva);
      console.log(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function crear_conNombreInvalido_noCreaReserva() {
    const reserva = new Reserva(1456, 'nancy@gmail.com', '2020-12-23', '95821465', canchaCreada.id);

    try {
      await moduloReservas.crear(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function crear_conFechaAnterior_noCreaReserva() {
    const reserva = new Reserva('pepe', 'nancy@gmail.com', '2020-03-24', '95821465', canchaCreada.id);

    try {
      await moduloReservas.crear(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmarReserva_reservaExistente() {
    const reserva = new Reserva('pepe', 'nancy@gmail.com', '2021-07-24', '95821465', canchaCreada.id);
    const reservaCreada = await moduloReservas.crear(reserva);

    moduloReservas.confirmar(reservaCreada.id);

    console.log('reservaConfirmada');
  }

  async function confirmarReserva_reservaNoExistente() {
    try {
      moduloReservas.confirmar(100);
    } catch (error) {
      console.log(`No se confirmo por ${JSON.stringify(error)}`);
    }
  }

  async function eliminarReserva_reservaExistente() {
    const reserva = new Reserva('pepe', 'nancy@gmail.com', '2020-12-23', '95821465', canchaCreada.id);
    const reservaCreada = await moduloReservas.crear(reserva);

    moduloReservas.eliminarReserva(reservaCreada.id);

    console.log('Reserva eliminada');
  }

  async function eliminarReserva_reservaNoExistente() {
    try {
      moduloReservas.eliminarReserva(100);
    } catch (error) {
      console.log(`No se elimino por ${JSON.stringify(error)}`);
    }
  }

  await crear_conDiaFeriado_noCreaReserva();
  await crear_conDiaNoferiado_creaReserva();
  await crear_conNombreInvalido_noCreaReserva();
  await crear_conFechaAnterior_noCreaReserva();
  await confirmarReserva_reservaExistente();
  await confirmarReserva_reservaNoExistente();
  await eliminarReserva_reservaExistente();
  await eliminarReserva_reservaNoExistente();
}

export default moduloReservasTest;
