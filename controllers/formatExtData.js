let Competitor = require('../models/f1Data'); // This module holds all of the Class definitions for the dataset.
// Declare arrays to hold the values we need...
var COMP_ARRAY = [];
var RACE_ROUNDS = []; // This is an array with every stage. Use the stage's id key , then the competitor object to access the stage results object... 
var RESULTS_ARRAY = [];
var axios = require('axios');
let F1_API_KEY = process.env.SPT_RADAR_API_KEY;

function formatCompetitors(data, URL) {
    var STAGES_IDs = data.stage.stages;
    // console.log("Called Competitor", STAGES_IDs)
    
    var competitors = data.stage.competitors; // Returns a JSON obj with each competitors profile...
    // console.log('competitors', competitors)
    for (const driver in competitors) {
        if (competitors.hasOwnProperty(driver)) {
            // Drivers Data : 
            // console.log(driver)
            const driver_id = competitors[driver].id;
            const driver_name = competitors[driver].name;
            const driver_cnt = competitors[driver].country_code;
            const driver_team = competitors[driver].team.name;
            const driver_pnts = competitors[driver].result.points;
            const driver_pos = competitors[driver].result.position;
            // console.log('driver_pnts', driver_pnts)
            
            var Driver = new Competitor(driver_id, driver_name, driver_cnt, driver_team, driver_pnts);
            COMP_ARRAY.push(Driver);
        }
    }
    console.table(COMP_ARRAY)
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

function formatData(data, URL) {
    formatCompetitors(data, URL);
}

module.exports = formatCompetitors, formatData;