import CanchaRepository from './CanchaRepository.js';
import CanchaDaoFactory from '../dao/CanchaDaoFactory.js';

class CanchaRepositoryFactory {
  static create() {
    const canchaDao = CanchaDaoFactory.create();
    return new CanchaRepository(canchaDao);
  }
}

export default CanchaRepositoryFactory;
