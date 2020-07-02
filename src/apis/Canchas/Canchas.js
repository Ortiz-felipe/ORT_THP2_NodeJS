import CU_crearCancha from '../../CasosDeUso/CU_crearCancha.js';
import CU_obtenerTodasLasCanchas from '../../CasosDeUso/CU_obtenerTodasLasCanchas.js';
import CU_obtenerCanchaPorId from '../../CasosDeUso/CU_obtenerCanchaPorId.js';
import CU_eliminarCancha from '../../CasosDeUso/CU_eliminarCancha.js';

class Canchas {
  constructor(canchaRepository) {
    this.CU_crearCancha = new CU_crearCancha(canchaRepository);
    this.CU_obtenerTodasLasCanchas = new CU_obtenerTodasLasCanchas(canchaRepository);
    this.CU_obtenerCanchaPorId = new CU_obtenerCanchaPorId(canchaRepository);
    this.CU_eliminarCancha = new CU_eliminarCancha(canchaRepository);
  }

  crear(cancha) {
    return this.CU_crearCancha.run(cancha);
  }

  obtenerTodas() {
    return this.CU_obtenerTodasLasCanchas.run();
  }

  obtenerPorId(canchaId) {
    return this.CU_obtenerCanchaPorId.run(canchaId);
  }

  eliminarCancha(canchaId) {
    return this.CU_eliminarCancha.run(canchaId);
  }
}
export default Canchas;
