import CanchaDaoArray from './CanchaDaoArray.js';

class CanchaDaoFactory {
  static create() {
    return new CanchaDaoArray();
  }
}

export default CanchaDaoFactory;
