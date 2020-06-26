import MailingService from './MailingService.js';
class MailingFactory {
    mailingService;

    constructor() {
        this.configurations = process.env.SENDGRID_API_KEY;
        this.mailingService = new MailingService(this.configurations);
    }

    getMailingService() {
        return this.mailingService;
    }
}

export default MailingFactory;
