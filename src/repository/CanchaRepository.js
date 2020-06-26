class CanchaRepository {
  constructor(canchaDao) {
    this.canchaDao = canchaDao;
  }

  guardar(cancha) {
    this.canchaDao.guardar(cancha);
  }

  obtenerTodas() {
    return this.canchaDao.obtenerTodas();
  }

  obtenerPorId(canchaId) {
    return this.canchaDao.obtenerPorId(canchaId);
  }

  eliminarCancha(canchaId) {
    this.canchaDao.eliminarCancha(canchaId);
  }
}

export default CanchaRepository;
