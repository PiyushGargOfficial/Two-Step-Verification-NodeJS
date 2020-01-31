const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();

function configMail(emailId, otp, response) {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            //imp: and in auth adding type: Oauth2 
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });


        let mailOptions = {
            from: 'gargpiyush03@gmail.com', // sender address
            to: emailId,
            subject: 'Hello! Im the helper you need..',
            text: ' Your otp below ,enter it and change password',
            html: `<b>${otp} </b> `,

        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Mail NOT Send ERROR.....", error);
            } else {
                console.log("Mail Send SuccessFully.....");
            }
        });
    });
}
module.exports = configMail;