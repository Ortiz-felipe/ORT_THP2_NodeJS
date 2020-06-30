import ReservaDtoDb from '../dto/ReservaDtoDb.js';

class ReservaDaoDb {
  guardar(reserva) {
    return reserva.save();
  }

  obtenerTodas() {
    return ReservaDtoDb.findAll();
  }

  obtenerPorId(reservaId) {
    return ReservaDtoDb.findByPk(reservaId);
  }

  eliminarReserva(reservaId) {
    return ReservaDtoDb.destroy({ where: { id: reservaId } });
  }

  actualizar(id, reservaDto) {
    const camposAActualizar = reservaDto.dataValues;
    delete camposAActualizar.id;
    return ReservaDtoDb.update(camposAActualizar, { where: { id } });
  }
}

export default ReservaDaoDb;
