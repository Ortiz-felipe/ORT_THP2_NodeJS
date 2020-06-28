class CU_eliminarReserva {
  constructor(reservasRepository) {
    this.reservasRepository = reservasRepository;
  }

  run(id) {
    this.reservasRepository.eliminarReserva(id);
  }
}

export default CU_eliminarReserva;
