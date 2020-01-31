const route = require('express').Router();


route.get('/', (req, res) => {
    res.send("Server is up and running..").status(200);
})

module.exports = route;