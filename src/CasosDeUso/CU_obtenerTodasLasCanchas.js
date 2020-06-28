class CU_obtenerTodasLasCanchas {
  constructor(canchaRepository) {
    this.canchaRepository = canchaRepository;
  }

  run() {
    return this.canchaRepository.obtenerTodas();
  }
}

export default CU_obtenerTodasLasCanchas;
