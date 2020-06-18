const sgMail = require('@sendgrid/mail');

module.exports = class EmailService {
    constructor(api_key) {
        this.api_key = api_key;
        this.configure();
    }

    configure() {
        sgMail.setApiKey(this.api_key);
    }

    async sendMail(emailFrom, emailTo, subject, textBody) {
        const email = {
            to: emailTo,
            from: emailFrom,
            subject: subject,
            text: textBody
        };

        try {
            await sgMail.send(email)
        } catch (error) {
            throw new Error(error.response.body);
        }
    }
};

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

// export default EmailService;