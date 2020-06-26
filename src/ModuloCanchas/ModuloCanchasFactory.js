import ModuloCanchas from './ModuloCanchas.js';
import CanchaRepositoryFactory from '../repository/CanchaRepositoryFactory.js';

class ModuloCanchasFactory {
  static create() {
    const canchaRepository = CanchaRepositoryFactory.create();
    return new ModuloCanchas(canchaRepository);
  }
}

export default ModuloCanchasFactory;
