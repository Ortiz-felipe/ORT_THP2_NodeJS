import ModuloReservas from './ModuloReservas.js';
import FeriadosFactory from '../apis/feriados/FeriadosFactory.js';
import CanchasFactory from '../apis/Canchas/CanchasFactory.js';
import ReservasRepositoryFactory from '../repository/ReservasRepositoryFactory.js';

class ModuloReservasFactory {
  static async create() {
    if (!ModuloReservasFactory.instance) {
      const apiFeriados = await FeriadosFactory.create();
      const repository = ReservasRepositoryFactory.create();
      const canchas = CanchasFactory.create();
      ModuloReservasFactory.instance = new ModuloReservas(apiFeriados, canchas, repository);
    }

    return ModuloReservasFactory.instance;
  }
}

export default ModuloReservasFactory;
