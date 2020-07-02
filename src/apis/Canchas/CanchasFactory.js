import Canchas from './Canchas.js';
import CanchaRepositoryFactory from '../../repository/CanchaRepositoryFactory.js';

class CanchasFactory {
  static create() {
    if (!CanchasFactory.instance) {
      const canchaRepository = CanchaRepositoryFactory.create();
      CanchasFactory.instance = new Canchas(canchaRepository);
    }
    return CanchasFactory.instance;
  }
}

export default CanchasFactory;
