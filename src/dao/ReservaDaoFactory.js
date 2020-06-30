// import ReservaDaoArray from './ReservaDaoArray.js';
import ReservaDaoDb from './ReservaDaoDb.js';

class ReservaDaoFactory {
  static create() {
    return new ReservaDaoDb();
  }
}

export default ReservaDaoFactory;
