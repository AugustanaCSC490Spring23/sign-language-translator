const nodemailer = require('nodemailer');

const sendEmail = options => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAILSENDER_USERNAME,
            pass: process.env.EMAILSENDER_PASSWORD
        }
    })
}