console.log('View Routes on server');
var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.get('/', (req, res) => {
        console.log("GET REQ to root")
        res.render('sign_in');
    });

    // app.get('/landing', (req, res) => {
    //     console.log('get req to /landing')
    //     res.render('landing');
    // });
}