import ReservaDtoDb from '../dto/ReservaDtoDb.js';
import Reserva from '../models/Reserva.js';

class ReservasRepository {
  constructor(reservaDao) {
    this.reservaDao = reservaDao;
  }

  async guardar(reserva) {
    const reservaDto = this.convertirADto(reserva);
    const reservaDtoGuardada = await this.reservaDao.guardar(reservaDto);
    return this.convertirAReserva(reservaDtoGuardada);
  }

  async obtenerTodas() {
    const reservasDtos = await this.reservaDao.obtenerTodas();
    return reservasDtos.map((reservaDto) => this.convertirAReserva(reservaDto));
  }

  async obtenerPorId(reservaId) {
    const reservaDto = await this.reservaDao.obtenerPorId(reservaId);
    return this.convertirAReserva(reservaDto);
  }

  eliminarReserva(reservaId) {
    return this.reservaDao.eliminarReserva(reservaId);
  }

  async actualizar(id, reserva) {
    const reservaDto = this.convertirADto(reserva);
    const reservaDtoGuardada = await this.reservaDao.actualizar(id, reservaDto);
    return this.convertirAReserva(reservaDtoGuardada);
  }

  convertirADto(reserva) {
    return ReservaDtoDb.build({
      nombre: reserva.nombre,
      email: reserva.email,
      fecha: reserva.fecha,
      dni: reserva.dni,
      estadoReserva: reserva.estadoReserva,
      CanchaId: reserva.canchaId,
    });
  }

  convertirAReserva(reservaDto) {
    if (!reservaDto) {
      return null;
    }
    return new Reserva(
      reservaDto.nombre,
      reservaDto.email,
      reservaDto.fecha,
      reservaDto.dni,
      reservaDto.CanchaId,
      reservaDto.estadoReserva,
    );
  }
}

export default ReservasRepository;
