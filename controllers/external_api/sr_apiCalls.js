console.log("Sports Radar API Module is here");
const F1_API_KEY = process.env.SPT_RADAR_API_KEY;
console.log('F1 api key', F1_API_KEY)
const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=${F1_API_KEY}`;

module.exports = seasonGrab = () => {

    axios.get(URL)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
}