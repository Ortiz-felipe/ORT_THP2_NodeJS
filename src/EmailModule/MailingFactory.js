import MailingService from './MailingService.js';
import EmailServiceMock from '../../test/mock/EmailServiceMock.js';

class MailingFactory {
  constructor() {
    this.configurations = process.env.SENDGRID_API_KEY;
    this.mailingService = new MailingService(this.configurations);
  }

  getMailingService() {
    if (process.env.NODE_ENV === 'test') {
      return new EmailServiceMock();
    }
    return this.mailingService;
  }
}

export default MailingFactory;
