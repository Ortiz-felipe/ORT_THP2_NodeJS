import CanchaDtoDb from '../dto/CanchaDtoDb.js';

class CanchaDaoDb {
  guardar(cancha) {
    return cancha.save();
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
