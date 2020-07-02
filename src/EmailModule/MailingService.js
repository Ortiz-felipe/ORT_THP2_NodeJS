import * as SendGrid from '@sendgrid/mail';

class EmailService {
  constructor(api_key) {
    this.api_key = api_key;
    this.configure();
  }

  configure() {
    SendGrid.default.setApiKey(this.api_key);
  }

  async sendMail(email) {
    try {
      await SendGrid.default.send(email);
    } catch (error) {
      const { message } = error.response.body.errors[0];
      throw new Error({ name: error.code, message });
    }
  }
}

export default EmailService;
