console.log('View Routes on server');
const getData = require('./externalAPICalls');
var axios = require('axios');
require('dotenv').config();
let formatData = require('./formatExtData');

const F1_API_KEY = process.env.SPT_RADAR_API_KEY; // Get the API key for the SportsRadar Service..
var URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`; // Construct the URL and pass in the API key...

module.exports = function(app) {
    app.get('/', (req, res) => { // On page load, get the 'root' route for the app's API...
        res.render('sign_in'); // Render the sign-in page HBS template...
    });

    app.get('/landing', (req, res) => { // Once authenticated, get the 'landing' HBS template.
        axios.get(URL)
            .then(res => {
                console.log('response =====>>', res.data)
            })
            .catch(err => {
                console.error(err);
            })
        res.render('landing');
    });

    app.get('/drivers', (req, res) => {
        URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`; //this endpoint retrieves the whole season...
        console.log('got drivers \n')
        axios.get(URL) // Call the API...
            .then(res => {
                var masterData = res.data;
                return formatData(masterData);
            })
            .then((dataArray) => {
                res.render('drivers', { dataArray });
            })
            .catch(err => { console.error("FAILED GET REQ", err) });
        // res.render('drivers');
    });

    app.get('/teams', (req, res) => {


    });

    app.get('/standings', (req, res) => {
        // for (let i = 0, len = Stages.length; i < len; i++) {

        // }
        axios.get(URL)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            })
        res.render('standings')
    });
}