class CU_obtenerReservaPorId {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository;
  }

  async run(id) {
    const reservaEncontrada = await this.reservasRepository.obtenerPorId(id);
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
