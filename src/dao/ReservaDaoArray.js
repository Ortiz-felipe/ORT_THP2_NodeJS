class ReservaDaoArray {
  constructor() {
    this.reservas = [];
    this.id = 0;
  }

  guardar(reserva) {
    reserva.dataValues.id = this.id;
    this.reservas.push(reserva);
    this.id++;
    return reserva;
  }

  obtenerTodas() {
    return this.reservas;
  }

  obtenerPorId(reservaId) {
    return this.reservas.find((reserva) => reservaId === reserva.dataValues.id);
  }

  eliminarReserva(reservaId) {
    const index = this.reservas.findIndex((reserva) => reservaId === reserva.dataValues.id);
    if (index === -1) {
      throw {
        error: 'id no encontrado',
        status: 404,
      };
    }
    this.reservas.splice(index, 1);
  }

  actualizar(id, reservaDto) {
    const reservaAActualizar = this.reservas.find((reserva) => reserva.dataValues.id === id);
    reservaAActualizar.dataValues = reservaDto.dataValues;
    reservaAActualizar.dataValues.id = id;
  }
}

export default ReservaDaoArray;
