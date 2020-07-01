import CanchaDaoDb from './CanchaDaoDb.js';

class CanchaDaoFactory {
  static create() {
    if (!CanchaDaoFactory.instance) {
      CanchaDaoFactory.instance = new CanchaDaoDb();
    }
    return CanchaDaoFactory.instance;
  }
}

export default CanchaDaoFactory;
