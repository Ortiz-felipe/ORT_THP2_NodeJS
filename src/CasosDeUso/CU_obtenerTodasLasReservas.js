class CU_obtenerTodasLasReservas {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository;
  }

  run() {
    this.reservasRepository.obtenerTodas();
  }
}

export default CU_obtenerTodasLasReservas;
