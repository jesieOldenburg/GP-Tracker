console.log('SR API CALL')
var axios = require('axios');
require('dotenv').config();
let formatData = require('./formatExtData');



function getDATA() {
    const F1_API_KEY = process.env.SPT_RADAR_API_KEY; // Get the API key for the SportsRadar Service..
    const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`; // Construct the URL and pass in the API key...
    axios.get(URL) // Call the API...
        .then(res => {
            var masterData = res.data;
            // console.log("TCL: masterData", masterData);
            return formatData(masterData);
        })
        .then((dataArray) => {
            console.log("TCL: getDATA -> dataArray", dataArray[0])
            return dataArray;
        })
        .catch(err => { console.error("FAILED GET REQ", err) });
}