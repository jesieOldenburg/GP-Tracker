// console.log("Sports Radar on server...");

require('dotenv').config();
module.exports = function(app) {

    app.get('/landing', function(req, res) {
        res.render('landing');
    })
}