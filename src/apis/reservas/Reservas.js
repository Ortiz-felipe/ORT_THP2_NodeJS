import CU_obtenerReservaPorId from '../../CasosDeUso/CU_obtenerReservaPorId.js';
import CU_eliminarReserva from '../../CasosDeUso/CU_eliminarReserva.js';
import CU_obtenerTodasLasReservas from '../../CasosDeUso/CU_obtenerTodasLasReservas.js';
import CU_confirmarReserva from '../../CasosDeUso/CU_confirmarReserva.js';
import CU_crearReserva from '../../CasosDeUso/CU_crearReserva.js';

class Reservas {
  constructor(apiFeriados, canchas, reservasRepository) {
    this.CU_obtenerReservaPorId = new CU_obtenerReservaPorId(reservasRepository);
    this.CU_eliminarReserva = new CU_eliminarReserva(reservasRepository);
    this.CU_obtenerTodasLasReservas = new CU_obtenerTodasLasReservas(reservasRepository);
    this.CU_confirmarReserva = new CU_confirmarReserva(reservasRepository);
    this.CU_crearReserva = new CU_crearReserva(apiFeriados, canchas, reservasRepository);
  }

  crear(reserva) {
    return this.CU_crearReserva.run(reserva);
  }

  confirmar(reservaId) {
    return this.CU_confirmarReserva.run(reservaId);
  }

  obtenerPorId(reservaId) {
    return this.CU_obtenerReservaPorId.run(reservaId);
  }

  eliminarReserva(reservaId) {
    return this.CU_eliminarReserva.run(reservaId);
  }

  obtenerTodas() {
    return this.CU_obtenerTodasLasReservas.run();
  }
}

export default Reservas;
