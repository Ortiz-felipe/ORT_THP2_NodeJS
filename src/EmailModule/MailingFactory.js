class MailingFactory {
    constructor(){
        this.configurations = process.env.SENDGRID_API_KEY;
    }

    getConfigurations() {
        return this.configurations;
    }
}

export default MailingFactory;
