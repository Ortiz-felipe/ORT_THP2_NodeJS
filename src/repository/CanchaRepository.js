class CanchaRepository {
  constructor(canchaDao) {
    this.canchaDao = canchaDao;
  }

  guardar(cancha) {
    return this.canchaDao.guardar(cancha);
  }

  obtenerTodas() {
    return this.canchaDao.obtenerTodas();
  }

  obtenerPorId(canchaId) {
    return this.canchaDao.obtenerPorId(canchaId);
  }

  eliminarCancha(canchaId) {
    return this.canchaDao.eliminarCancha(canchaId);
  }
}

export default CanchaRepository;
