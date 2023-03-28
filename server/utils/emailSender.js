const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAILSENDER_HOST,
        port: process.env.EMAILSENDER_PORT,
        auth: {
            user: process.env.EMAILSENDER_USERNAME,
            pass: process.env.EMAILSENDER_PASSWORD
        }
    });

    const emailOptions = {
        from: 'Sign Language Translator <slt@augustana.edu>',
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    // send email
    await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;