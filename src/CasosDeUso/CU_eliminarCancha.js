class CU_eliminarCancha {
  constructor(canchaRepository) {
    this.canchaRepository = canchaRepository;
  }

  run(id) {
    return this.canchaRepository.eliminarCancha(id);
  }
}

export default CU_eliminarCancha;
