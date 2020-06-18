import app from './app.js';

const MailingFactory = require('./EmailModule/MailingFactory');

const mailFactory = new MailingFactory();
const mailService = mailFactory.getMailingService();

console.log(mailService);


app.listen(3000, () => console.log('Escuchando en puerto 3000'));