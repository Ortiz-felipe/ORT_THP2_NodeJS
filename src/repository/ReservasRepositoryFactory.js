import ReservasRepository from './ReservasRepository.js';
import ReservaDaoFactory from '../dao/ReservaDaoFactory.js';

class ReservasRepositoryFactory {
  static create() {
    if (!ReservasRepositoryFactory.instance) {
      const reservasDao = ReservaDaoFactory.create();
      ReservasRepositoryFactory.instance = new ReservasRepository(reservasDao);
    }
    return ReservasRepositoryFactory.instance;
  }
}

export default ReservasRepositoryFactory;
