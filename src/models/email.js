class Email {
    constructor(destination, subject, text){
        this.to = process.env.MAIL_SENDER,
        this.from = destination,
        this.subject = subject,
        this.text = text
    }
}

export default Email;