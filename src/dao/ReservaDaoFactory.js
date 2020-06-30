import ReservaDaoArray from './ReservaDaoArray.js';
import ReservaDaoDb from './ReservaDaoDb.js';

class ReservaDaoFactory {
  static create() {
    if (process.env.NODE_ENV === 'test') {
      return new ReservaDaoArray();
    }
    return new ReservaDaoDb();
  }
}

export default ReservaDaoFactory;
