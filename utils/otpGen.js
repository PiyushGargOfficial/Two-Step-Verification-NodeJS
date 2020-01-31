var otpGen = require('otp-generator');

function generateOTP() {
    return otpGen.generate(6, {
        upperCase: false,
        specialChars: false
    });
}

module.exports = generateOTP;