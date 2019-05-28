const axios = require('axios');
require('dotenv').config();
var formatData = require('./dataFormatter');

module.exports = grabData = (function() {
    const F1_API_KEY = process.env.SPT_RADAR_API_KEY;
    const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=db6tu9bxhww4hn5yv9dqgx9f`;

    axios.get(URL)
        .then(res => {
            var masterData = res.data;

            console.log(masterData.stage.id)
            formatData(masterData);
        })
        .catch(err => { console.error("FAILED GET REQ", err); });
})(URL);