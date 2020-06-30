import ModuloReservas from './ModuloReservas.js';
import FeriadosFactory from '../apis/feriados/FeriadosFactory.js';
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js';
import ReservasRepositoryFactory from '../repository/ReservasRepositoryFactory.js';

class ModuloReservasFactory {
  static async create() {
    const apiFeriados = await FeriadosFactory.create();
    const repository = ReservasRepositoryFactory.create();
    const moduloCanchas = ModuloCanchasFactory.create();

    return new ModuloReservas(apiFeriados, moduloCanchas, repository);
  }
}

export default ModuloReservasFactory;
