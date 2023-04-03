const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");
const layouts = require("handlebars-layouts");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Register the 'text' block helper in hbs file in views
handlebars.registerHelper(layouts(handlebars));

module.exports = class EmailSender {
  constructor(user, url) {
    this.to = user.email;
    this.from = process.env.FROM_EMAIL;
    this.userName = user.name.split(" ")[0];
    this.url = url;
    this.transporter =
      process.env.NODE_ENV === "development"
        ? nodemailer.createTransport({
            host: process.env.EMAILSENDER_HOST,
            port: process.env.EMAILSENDER_PORT,
            auth: {
              user: process.env.EMAILSENDER_USERNAME,
              pass: process.env.EMAILSENDER_PASSWORD,
            },
          })
        : null;
  }

  async sendEmail(template, subject) {
    const data = {
      name: this.userName,
      url: this.url,
      subject,
    };

    const hbsTemplate = handlebars.compile(
      fs.readFileSync(`${__dirname}/../views/email/${template}.hbs`, "utf8")
    );

    const html = hbsTemplate(data);
    const text = hbsTemplate(data, { textOnly: true });

    const emailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text,
      html,
    };

    try {
      if (process.env.NODE_ENV === "development") {
        await this.transporter.sendMail(emailOptions);
        console.log("Email sent by nodemailer");
      } else {
        await sgMail.send(emailOptions);
        console.log("Email sent by SendGrid");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async sendWelcomeEmail() {
    await this.sendEmail("welcome", "Welcome to sign language translator");
  }

  async sendResetPasswordEmail() {
    await this.sendEmail(
      "resetPassword",
      "Password Reset link [Valid in 2 mins]"
    );
  }
};
