class CU_obtenerReservaPorId {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository;
  }

  run(id) {
    const reservaEncontrada = this.reservasRepository.obtenerPorId(id);
    if (reservaEncontrada) {
      return reservaEncontrada;
    }
    throw {
      error: 'Id no encontrado',
      status: 404,
    };
  }
}

export default CU_obtenerReservaPorId;
