import MailingFactory from './MailingFactory.js';
import MailingService from './MailingService.js';

class MailingBuilder {
    mailingFactory;
    mailingService;

    constructor(){
        if(!this.mailingFactory && !this.mailingService) {
            this.mailingFactory = new MailingFactory();
            this.mailingService = new MailingService(this.mailingFactory.getConfigurations());
        }
    }

    getMailingService() {
        return this.mailingService;
    }

}

export default MailingBuilder;