let Competitor = require('../models/f1Data'); // This module holds all of the Class definitions for the dataset.
// Declare arrays to hold the values we need...
var COMP_ARRAY = [];
var RACE_ROUNDS = []; // This is an array with every stage. Use the stage's id key , then the competitor object to access the stage results object... 
var RESULTS_ARRAY = [];

function formatCompetitors(data) {
    var competitors = data.stage.competitors; // Returns a JSON obj with each competitors profile...
    for (const driver in competitors) {
        if (competitors.hasOwnProperty(driver)) {
            // Drivers Data : 
            const driver_id = competitors[driver].id;
            const driver_name = competitors[driver].name;
            const driver_cnt = competitors[driver].country_code;
            const driver_team = competitors[driver].team.name;

            var Driver = new Competitor(driver_id, driver_name, driver_cnt, driver_team);
            COMP_ARRAY.push(Driver);
        }
    }
    console.log("TCL: formatCompetitors -> COMP_ARRAY", COMP_ARRAY)
    return COMP_ARRAY;
}

function formatRaceRounds(data) {
    var fullSeason = data.stage.stages;
    console.log("TCL: formatRaceRounds -> fullSeason", fullSeason)
    fullSeason.forEach(element => {
        var STAGE_ID = element.id;
        // console.log("TCL: formatData -> STAGE_ID", JSON.stringify(STAGE_ID))
        const F1_API_KEY = process.env.SPT_RADAR_API_KEY; // Get the API key for the SportsRadar Service..
        const URL = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/${element}/summary.json?api_key=${F1_API_KEY}`;

        console.log("TCL: formatData -> URL", URL)

    });
}

// This function is called from the ./viewRoutes.js file...
function formatTeams(data) { // Data is passed from the axios call within viewRoutes.js...
    var teams = data.stage.teams;
    console.log('Here are the teams ==>', teams);
}

function formatData(data) {
    formatCompetitors(data);
}

module.exports = formatCompetitors, formatData;