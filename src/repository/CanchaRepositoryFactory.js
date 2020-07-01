import CanchaRepository from './CanchaRepository.js';
import CanchaDaoFactory from '../dao/CanchaDaoFactory.js';

class CanchaRepositoryFactory {
  static create() {
    if (!CanchaRepositoryFactory.instance) {
      const canchaDao = CanchaDaoFactory.create();
      CanchaRepositoryFactory.instance = new CanchaRepository(canchaDao);
    }
    return CanchaRepositoryFactory.instance;
  }
}

export default CanchaRepositoryFactory;
