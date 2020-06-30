import CanchaDaoArray from './CanchaDaoArray.js';
import CanchaDaoDb from './CanchaDaoDb.js';

class CanchaDaoFactory {
  static create() {
    if (process.env.NODE_ENV === 'test') {
      return new CanchaDaoArray();
    }
    return new CanchaDaoDb();
  }
}

export default CanchaDaoFactory;
