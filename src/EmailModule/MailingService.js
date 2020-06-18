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
            await SendGrid.default.send(email)
        } catch (error) {
            let {message} = error.response.body[0];
            throw new Error(message);
        }
    }
};

export default EmailService;

// class EmailService {
//     constructor(api_key) {
//         this.api_key = api_key;
//         this.configure();
//     }

//     configure() {
//         sgMail.setApiKey(this.api_key);
//     }

//     async sendMail(emailFrom, emailTo, subject, textBody) {
//         const email = {
//             to: emailTo,
//             from: emailFrom,
//             subject: subject,
//             text: textBody
//         };

//         try {
//             await sgMail.send(email);
//         } catch (error) {
//             throw new Error(error.response.body);
//         }
//     }
// }
