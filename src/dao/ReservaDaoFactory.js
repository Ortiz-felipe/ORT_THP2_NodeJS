import ReservaDaoDb from './ReservaDaoDb.js';

class ReservaDaoFactory {
  static create() {
    if (!ReservaDaoFactory.instance) {
      ReservaDaoFactory.instance = new ReservaDaoDb();
    }
    return ReservaDaoFactory.instance;
  }
}

export default ReservaDaoFactory;
