const express = require("express")
const app = express()
const chalk = require("chalk")

//BodyParser :
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static('public'));

//Routes :
const AuthRoute = require('./routes/auth');
const OtpRoute = require('./routes/email');
const verifyRoute = require('./routes/verify');
const resetRoute = require('./routes/reset');

//Middlewares :
app.use('/api/auth', AuthRoute);
app.use('/api/', OtpRoute);
app.use('/api/', verifyRoute);
app.use('/api/', resetRoute);

const PORT = process.env.PORT || 1234


app.listen(PORT, () => {
    console.log(chalk.red(`Server Started on : ${PORT}`))
})