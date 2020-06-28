import CanchaDaoDb from './CanchaDaoDb.js';

class CanchaDaoFactory {
  static create() {
    return new CanchaDaoDb();
  }
}

export default CanchaDaoFactory;
