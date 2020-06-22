import ModuloReservasFactory from '../src/ModuloReservas/ModuloReservasFactory.js';
import ModuloCanchasFactory from '../src/ModuloCanchas/ModuloCanchasFactory.js';

async function moduloReservasTest() {
  const moduloReservas = await ModuloReservasFactory.create();
  const moduloCanchas = ModuloCanchasFactory.create();

  const cancha = {
    nombre: 'Pele',
    precio: 50,
    capacidad: 11,
  };
  const canchaCreada = await moduloCanchas.crear(cancha);

  async function crear_conDiaFeriado_noCreaReserva() {
    const reserva = {
      nombre: 'nancy',
      dni: '95821465',
      fecha: '2020-12-25',
      email: 'nancy@gmail.com',
      canchaId: canchaCreada.id,
    };
    try {
      await moduloReservas.crear(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function crear_conDiaNoferiado_creaReserva() {
    const reserva = {
      nombre: 'nancy',
      dni: '95821465',
      fecha: '2020-12-23',
      email: 'nancy@gmail.com',
      canchaId: canchaCreada.id,
    };
    try {
      await moduloReservas.crear(reserva);
      console.log(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function crear_conNombreInvalido_noCreaReserva() {
    const reserva = {
      nombre: 1456,
      dni: '95821465',
      fecha: '2020-12-24',
      email: 'nancy@gmail.com',
      canchaId: canchaCreada.id,

    };
    try {
      await moduloReservas.crear(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function crear_conFechaAnterior_noCreaReserva() {
    const reserva = {
      nombre: 'pepe',
      dni: '95821465',
      fecha: '2020-03-24',
      email: 'nancy@gmail.com',
      canchaId: canchaCreada.id,
    };
    try {
      await moduloReservas.crear(reserva);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmarReserva_reservaExistente() {
    const reserva = {
      nombre: 'pepe',
      dni: '95821465',
      fecha: '2020-07-24',
      email: 'nancy@gmail.com',
      canchaId: canchaCreada.id,
    };
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
    const reserva = {
      nombre: 'pepe',
      dni: '95821465',
      fecha: '2020-07-24',
      email: 'nancy@gmail.com',
      canchaId: canchaCreada.id,
    };
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
