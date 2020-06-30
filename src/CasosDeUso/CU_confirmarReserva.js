class CU_confirmarReserva {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository;
  }

  async run(id) {
    const reservaEncontrada = await this.reservasRepository.obtenerPorId(id);
    if (reservaEncontrada) {
      reservaEncontrada.estadoReserva = true;
      await this.reservasRepository.actualizar(id, reservaEncontrada);
    } else {
      throw {
        error: 'Id no encontrado',
        status: 404,
      };
    }
  }
}

export default CU_confirmarReserva;
