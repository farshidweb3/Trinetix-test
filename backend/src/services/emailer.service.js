// Ensure dotenv is loaded at the very beginning
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const nodemailer = require('nodemailer');
const i18n = require('i18n');

// Configure i18n for localization
i18n.configure({
    locales: ['En', 'Mn'],
    directory: __dirname + '/locales',
    defaultLocale: 'En',
});

module.exports = {
    deliverEmail: function (dest, subject, body) {
  
        // Create a transport using Gmail
        var transport = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE, // Using Gmail as the service
            host: process.env.EMAIL_HOST,
            port:  process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user:process.env.EMAIL, // Your Gmail address
                pass: process.env.EMAIL_PWD // Your app password or Gmail password
            }
        });

        // Define mail options
        var mailOptions = {
            from: process.env.EMAIL,
            to: dest,
            subject: subject,
            text: body
        };

        // Send the email
        transport.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
};
