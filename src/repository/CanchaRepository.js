import CanchaDtoDb from '../dto/CanchaDtoDb.js';
import Cancha from '../models/Cancha.js';

class CanchaRepository {
  constructor(canchaDao) {
    this.canchaDao = canchaDao;
  }

  async guardar(cancha) {
    const canchaDto = this.convertirADto(cancha);
    const canchaDtoGuardada = await this.canchaDao.guardar(canchaDto);
    return this.convertirACancha(canchaDtoGuardada);
  }

  async obtenerTodas() {
    const canchaDtos = await this.canchaDao.obtenerTodas();
    return canchaDtos.map((canchaDto) => this.convertirACancha(canchaDto));
  }

  async obtenerPorId(canchaId) {
    const canchaDto = await this.canchaDao.obtenerPorId(canchaId);
    return this.convertirACancha(canchaDto);
  }

  eliminarCancha(canchaId) {
    return this.canchaDao.eliminarCancha(canchaId);
  }

  convertirADto(cancha) {
    return CanchaDtoDb.build({
      nombre: cancha.nombre,
      precio: cancha.precio,
      capacidad: cancha.capacidad,
      estaHabilitada: cancha.estaHabilitada,

    });
  }

  convertirACancha(canchaDto) {
    if (!canchaDto) {
      return null;
    }
    return new Cancha(
      canchaDto.nombre,
      canchaDto.precio,
      canchaDto.capacidad,
      canchaDto.estaHabilitada,
      canchaDto.id,
    );
  }
}

export default CanchaRepository;
