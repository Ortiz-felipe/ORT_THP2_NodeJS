const env = require('dotenv').config();

const MailingFactory = require('./EmailModule/MailingFactory');

const mailingfactory = new MailingFactory();

const mailingService = mailingfactory.getMailingService();

mailingService.sendMail('test@test.com', 'jfoc.link@gmail.com', 'This is a mail sent from SendGrid', 'If you can see this, the test was successful');


