console.log('View Routes on server');
var axios = require('axios');
require('dotenv').config();
// var express = require('express');
// var router = express.Router();
class Competitor {
    constructor(id, name, cnt, team) {
        this.id = id,
            this.name = name,
            this.cnt = cnt,
            this.team = team
    }
}
class SeasonResults {
    constructor(points, wins, polePos, podiums, fastLaps, carNum) {
        this.points = points,
            this.wins = wins,
            this.polePos = polePos,
            this.podiums = podiums,
            this.fastLaps = fastLaps,
            this.carNum = carNum
    }
}

function formatData(data) {
    // console.log('Here is the Data', data.stage.competitors);
    var masterData = data;
    var raceRound = data.stage.stages;
    var competitors = data.stage.competitors; // Returns a JSON obj with each competitors profile...
    var teams = data.stage.teams;

    for (const driver in competitors) {
        if (competitors.hasOwnProperty(driver)) {
            // Drivers Data :
            const driver_id = competitors[driver].id;
            const driver_name = competitors[driver].name;
            const driver_cnt = competitors[driver].country_code;
            const driver_team = competitors[driver].team.name;

            // Team Data:
            const team_id = competitors[driver].team.id;
            const team_name = competitors[driver].team.name
                // console.log('TEAM ID:', team_id + `\n TEAM NAME:${team_name}`);
        }
    }
    return masterData;
}

module.exports = function(app) {
    app.get('/', (req, res) => {
        console.log("GET REQ to root")
        res.render('sign_in');
    });
    app.get('/landing', (req, res) => {
        const F1_API_KEY = process.env.SPT_RADAR_API_KEY;
        const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:426678/summary.json?api_key=db6tu9bxhww4hn5yv9dqgx9f`;

        axios.get(URL)
            .then(res => {
                var masterData = res.data;
                console.log('SUCESS', masterData.stage.id);
                formatData(masterData);
            })
            .catch(err => { console.error("FAILED GET REQ", err); });

        res.render('landing');
    });
}