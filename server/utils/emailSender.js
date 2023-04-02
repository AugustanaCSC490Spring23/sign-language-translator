const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");
const layouts = require("handlebars-layouts");

// Register the 'text' block helper in hbs file in views
handlebars.registerHelper(layouts(handlebars));

module.exports = class EmailSender {
  constructor(user, url) {
    this.to = user.email;
    this.from = process.env.FROM_EMAIL;
    this.userName = user.name.split(" ")[0];
    this.url = url;
  }

  transporter() {
    if (process.env.NODE_ENV === "development") {
      return nodemailer.createTransport({
        host: process.env.EMAILSENDER_HOST,
        port: process.env.EMAILSENDER_PORT,
        auth: {
          user: process.env.EMAILSENDER_USERNAME,
          pass: process.env.EMAILSENDER_PASSWORD,
        },
      });
    }

    // if in production, just use simple nodemailer
    return nodemailer.createTransport({
      host: process.env.SENDGRID_SERVER,
      port: process.env.SENDGRID_PORT,
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });
  }

  async sendEmail(template, subject) {
    // create and process and HTML for email template
    const hbsTemplate = handlebars.compile(
      fs.readFileSync(`${__dirname}/../views/email/${template}.hbs`, "utf8")
    );
    const data = {
      name: this.userName,
      url: this.url,
      subject,
    };

    const html = hbsTemplate(data);
    const text = hbsTemplate(data, { textOnly: true });

    // email options
    const emailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text,
      html,
    };

    // create a transport and mail
    this.transporter().sendMail(emailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        // console.log("Email sent: " + info.response);
      }
    });
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
