import ReservasRepository from './ReservasRepository.js';
import ReservaDaoFactory from '../dao/ReservaDaoFactory.js';

class ReservasRepositoryFactory {
    static create() {
        const reservasDao = ReservaDaoFactory.create();
        return new ReservasRepository(reservasDao);
      }    
};

export default ReservasRepositoryFactory;