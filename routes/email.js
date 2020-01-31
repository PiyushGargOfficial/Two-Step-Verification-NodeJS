const route = require('express').Router();
const mail = require('../utils/mailer');
const otp = require("../utils/otpGen");
const User = require("../db/models/User")

route.post('/forgetPass', async (req, res) => {

    const emailExist = await User.findOne({
        email: req.body.email
    });
    if (!emailExist) {
        res.status(400).json({
            msg: "Email do not Exists.."
        })
    } else {
        var email = req.body;
        var otpGenerated = await otp();
        var email = {
            email: req.body.email
        };
        var newOtp = {
            $set: {
                otp: otpGenerated
            }
        };
        User.updateOne(email, newOtp).then(() => {
            User.findOne({
                email: req.body.email
            }).then(user => {
                res.json(user)
            }).catch(error => {
                res.json({
                    msg: error
                })
            })
        }).catch(err => {
            res.json({
                msg: err
            })
        })
        try {
            await mail(email.email, otpGenerated, null);
            res.send({
                msg: "OTP sent"
            });
        } catch (err) {
            res.send({
                msg: err
            })
        }
    }
});

module.exports = route;