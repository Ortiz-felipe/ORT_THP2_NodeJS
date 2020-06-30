class CU_obtenerTodasLasReservas {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository;
  }

  run() {
    return this.reservasRepository.obtenerTodas();
  }
}

export default CU_obtenerTodasLasReservas;
