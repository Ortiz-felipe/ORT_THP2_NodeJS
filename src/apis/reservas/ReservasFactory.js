import Reservas from './Reservas.js';
import FeriadosFactory from '../feriados/FeriadosFactory.js';
import CanchasFactory from '../Canchas/CanchasFactory.js';
import ReservasRepositoryFactory from '../../repository/ReservasRepositoryFactory.js';
import EmailFactory from '../../EmailModule/MailingFactory';

class ReservasFactory {
  static async create() {
    if (!ReservasFactory.instance) {
      const apiFeriados = await FeriadosFactory.create();
      const repository = ReservasRepositoryFactory.create();
      const canchas = CanchasFactory.create();
      const emailFactory = new EmailFactory();
      const emailService = emailFactory.getMailingService();
      ReservasFactory.instance = new Reservas(apiFeriados, canchas, repository, emailService);
    }

    return ReservasFactory.instance;
  }
}

export default ReservasFactory;
