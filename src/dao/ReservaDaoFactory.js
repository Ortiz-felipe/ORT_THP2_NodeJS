import ReservaDaoArray from './ReservaDaoArray.js';

class ReservaDaoFactory {
  static create() {
    return new ReservaDaoArray();
  }
}

export default ReservaDaoFactory;
