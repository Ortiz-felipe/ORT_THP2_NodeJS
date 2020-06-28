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
    let fileRead = fs.readFileSync(path);
    let base64 = fileRead.toString('base64');

    const email = {
        to: emailTo,
        from: emailFrom,
        subject: subject,
        text: textBody,
        attachments: [
            {
                filename: 'reporte.xlsx',
                content: base64,
                contentType: 'text',

            }
        ]


    };
    try {
      await SendGrid.default.send(email);
    } catch (error) {
      const { message } = error.response.body[0];
      throw new Error(message);
    }
  }
}

export default EmailService;
