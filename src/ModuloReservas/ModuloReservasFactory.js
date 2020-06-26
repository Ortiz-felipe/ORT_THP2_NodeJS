import ModuloReservas from './ModuloReservas.js';
import ModuloFeriadosFactory from '../ModuloFeriados/ModuloFeriadoFactory.js';
import ReservasRepositoryFactory from '../repository/ReservasRepositoryFactory.js';

class ModuloReservasFactory {
  static async create(canchas) {
    const moduloFeriado = await ModuloFeriadosFactory.create();    
    const repository = ReservasRepositoryFactory.create();

    return new ModuloReservas(moduloFeriado, canchas, repository);
  }
}

export default ModuloReservasFactory;
