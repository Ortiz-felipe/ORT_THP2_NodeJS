class Email {
  constructor(destination, subject, text) {
    this.to = destination;
    this.from = process.env.MAIL_SENDER;
    this.subject = subject;
    this.text = text;
    this.attachments = [];
  }
}

export default Email;
