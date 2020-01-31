const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MongoDB_URL: `mongodb+srv://Piyush:${process.env.MongoDB_Pass}@cluster0-uzovw.mongodb.net/test?retryWrites=true&w=majority`,
    MongoDB_Local: ` mongodb://127.0.0.1:27017/test`
}