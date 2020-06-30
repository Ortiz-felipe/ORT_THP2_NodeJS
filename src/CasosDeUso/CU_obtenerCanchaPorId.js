class CU_obtenerCanchaPorId {
  constructor(canchaRepository) {
    this.canchaRepository = canchaRepository;
  }

  async run(id) {
    const canchaEncontrada = await this.canchaRepository.obtenerPorId(id);
    if (canchaEncontrada) {
      return canchaEncontrada;
    }
    throw {
      error: 'Id de cancha no encontrado',
      status: 404,
    };
  }
}

export default CU_obtenerCanchaPorId;
