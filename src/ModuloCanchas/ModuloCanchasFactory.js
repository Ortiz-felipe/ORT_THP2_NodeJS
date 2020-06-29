import ModuloCanchas from './ModuloCanchas.js';
import CanchaRepositoryFactory from '../repository/CanchaRepositoryFactory.js';

class ModuloCanchasFactory {
  static create() {
    if (!ModuloCanchasFactory.instance) {
      const canchaRepository = CanchaRepositoryFactory.create();
      ModuloCanchasFactory.instance = new ModuloCanchas(canchaRepository);
    }
    return ModuloCanchasFactory.instance;
  }
}

export default ModuloCanchasFactory;
