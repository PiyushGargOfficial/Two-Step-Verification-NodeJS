const route = require('express').Router();
const User = require("../db/models/User")

route.post('/verify', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    })
    if (!user) {
        res.status(400).send({
            msg: "Email doesnt exists"
        })
    } else {
        if (user.otp === req.body.otp) {
            res.send({
                msg: "User Verified"
            }).status(200);
        } else {
            res.send({
                msg: "OTP didn't match"
            }).status(400);
        }
    }
})

module.exports = route;