const MailingService = require('./MailingService');

module.exports = class MailingFactory {
    mailingService;

    constructor() {
        init();
    }

    init() {
        if (!mailingService) {
            this.mailingService = new MailingService(process.env.SENDGRID_API_KEY);
        }
    }

    getMailingService() {
        return this.mailingService;
    }
}

