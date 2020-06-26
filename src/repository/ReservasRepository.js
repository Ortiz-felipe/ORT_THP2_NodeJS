class ReservasRepository {
    constructor(reservaDao) {
        this.reservaDao = reservaDao;
    }
    
    guardar(reserva) {
        this.reservaDao.guardar(reserva);
    } 

    obtenerTodas() {
        return this.reservaDao.obtenerTodas();
    }

    obtenerPorId(reservaId) {
        return this.reservaDao.obtenerPorId(reservaId);
    }

    eliminarReserva(reservaId) {
        this.reservaDao.eliminarReserva(reservaId);
    }
}

export default ReservasRepository;