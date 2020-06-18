// const MailingService = require("./MailingService");

// const mailingService = new MailingService("something");

// module.exports = mailingService;

// // module.exports = class MailingFactory {
// //     mailingService;

// //     constructor() {
// //         init();
// //     }

// //     init() {
// //         if (!mailingService) {
// //             this.mailingService = new MailingService(process.env.SENDGRID_API_KEY);
// //         }
// //     }

// //     getMailingService() {
// //         return this.mailingService;
// //     }
// // }

class MailingFactory {
    constructor(){
        this.configurations = process.env.SENDGRID_API_KEY;
    }

    getConfigurations() {
        return this.configurations;
    }
}

export default MailingFactory;
