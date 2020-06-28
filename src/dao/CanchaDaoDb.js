import CanchaDtoDb from '../dto/CanchaDtoDb.js';

class CanchaDaoDb {
  guardar(cancha) {
    return CanchaDtoDb.create(cancha);
  }

  obtenerTodas() {
    return CanchaDtoDb.findAll();
  }

  obtenerPorId(canchaId) {
    return CanchaDtoDb.findByPk(canchaId);
  }

  eliminarCancha(canchaId) {
    return CanchaDtoDb.destroy({ where: { id: canchaId } });
  }
}

export default CanchaDaoDb;
