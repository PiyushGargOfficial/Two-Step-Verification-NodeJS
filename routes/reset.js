const route = require('express').Router();
const User = require("../db/models/User")
const bcrypt = require("bcryptjs")


route.post('/reset', async (req, res) => {

    const emailExist = await User.findOne({
        email: req.body.email
    });
    if (!emailExist) {
        res.status(400).json({
            msg: "Email do not Exists.."
        })
    } else {

        var email = {
            email: req.body.email
        };
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        var newPass = {
            $set: {
                password: hashPassword
            }
        };
        User.updateOne(email, newPass).then(() => {
            User.findOne({
                email: req.body.email
            }).then(user => {
                res.json({
                    msg: "Password Changed"
                })

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
    }
});

module.exports = route;