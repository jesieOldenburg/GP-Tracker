console.log('View Routes on server');
var axios = require('axios');
require('dotenv').config();
let formatData = require('./formatExtData');
// var express = require('express');
// var router = express.Router();


module.exports = function(app) {

    app.get('/', (req, res) => { // On page load, get the 'root' route for the app's API...
        // console.log("GET REQ to root")
        res.render('sign_in'); // Render the sign-in page HBS template...
    });

    app.get('/landing', (req, res) => { // Once authenticated, get the 'landing' HBS template.
        const F1_API_KEY = process.env.SPT_RADAR_API_KEY; // Get the API key for the SportsRadar Service..
        const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`;

        axios.get(URL)
            .then(res => {
                var masterData = res.data;
                console.log('SUCESS', masterData.stages);
                return formatData(masterData);
            })
            .then((dataArray) => {
                console.log('dataArray IN AXIOS ===>>', dataArray);
            })
            .catch(err => { console.error("FAILED GET REQ", err); });
        // console.log('COMP HERE?? ==>>', COMP);
        res.render('landing'); // res.render('landing', {EXAMPLE OBJ VALS HERE})

    });
}