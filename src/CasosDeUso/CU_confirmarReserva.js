class CU_confirmarReserva {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository;
  }

  run(id) {
    const reservaEncontrada = this.reservasRepository.obtenerPorId(id);
    if (reservaEncontrada) {
      reservaEncontrada.estadoReserva = true;
    } else {
      throw {
        error: 'Id no encontrado',
        status: 404,
      };
    }
  }
}

export default CU_confirmarReserva;
