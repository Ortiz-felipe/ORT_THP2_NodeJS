import CU_obtenerReservaPorId from '../CasosDeUso/CU_obtenerReservaPorId.js';
import CU_eliminarReserva from '../CasosDeUso/CU_eliminarReserva.js';
import CU_obtenerTodasLasReservas from '../CasosDeUso/CU_obtenerTodasLasReservas.js';
import CU_confirmarReserva from '../CasosDeUso/CU_confirmarReserva.js';
import CU_crearReserva from '../CasosDeUso/CU_crearReserva.js';

class ModuloReservas {
  constructor(moduloFeriados, moduloCanchas, reservasRepository) {
    this.CU_obtenerReservaPorId = new CU_obtenerReservaPorId(reservasRepository);
    this.CU_eliminarReserva = new CU_eliminarReserva(reservasRepository);
    this.CU_obtenerTodasLasReservas = new CU_obtenerTodasLasReservas(reservasRepository);
    this.CU_confirmarReserva = new CU_confirmarReserva(reservasRepository);
    this.CU_crearReserva = new CU_crearReserva(moduloFeriados, moduloCanchas, reservasRepository);
  }

  crear(reserva) {
    return this.CU_crearReserva.run(reserva);
  }

  confirmar(reservaId) {
    this.CU_confirmarReserva.run(reservaId);
  }

  obtenerPorId(reservaId) {
    return this.CU_obtenerReservaPorId.run(reservaId);
  }

  eliminarReserva(reservaId) {
    this.CU_eliminarReserva.run(reservaId);
  }

  obtenerTodas() {
    return this.CU_obtenerTodasLasReservas.run();
  }
}

export default ModuloReservas;
