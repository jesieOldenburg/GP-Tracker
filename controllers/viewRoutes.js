console.log('View Routes on server');
const getData = require('./externalAPICalls');
var axios = require('axios');
require('dotenv').config();
let formatData = require('./formatExtData');

module.exports = function(app) {
    app.get('/', (req, res) => { // On page load, get the 'root' route for the app's API...
        res.render('sign_in'); // Render the sign-in page HBS template...
    });

    app.get('/landing', (req, res) => { // Once authenticated, get the 'landing' HBS template.
        const F1_API_KEY = process.env.SPT_RADAR_API_KEY; // Get the API key for the SportsRadar Service..
        const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`; // Construct the URL and pass in the API key...

        // axios.get(URL) // Call the API...
        //     .then(res => {
        //         var masterData = res.data;
        //         return formatData(masterData);
        //     })
        //     .then((dataArray) => {
        //         res.render('landing', { dataArray });
        //     })
        //     .catch(err => { console.error("FAILED GET REQ", err) });
        // getData();
    });

    app.get('/drivers', (req, res) => {
        const F1_API_KEY = process.env.SPT_RADAR_API_KEY; // Get the API key for the SportsRadar Service..
        const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`;
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
}