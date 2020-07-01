import { inspect } from 'util';
import EmailService from '../../src/EmailModule/MailingService.js';

class EmailServiceMock extends EmailService {
  configure() {
    // Do nothing...
  }

  async sendMail(email) {
    console.log(`Sending email: ${inspect(email)}`);
  }
}

export default EmailServiceMock;
