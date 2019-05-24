console.log("Sports Radar on server...");
const axios = require('axios');
const F1_API_KEY = process.env.SPT_RADAR_API_KEY;

module.exports = function(req, res, app) {
    const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`;
    console.log('INSIDE POST FUNC!!')


    axios.get(URL)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })


};