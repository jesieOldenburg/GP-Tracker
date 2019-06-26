let Competitor = require('../models/f1Data'); // This module holds all of the Class definitions for the dataset.

// This function is called from the ./viewRoutes.js file...
module.exports = function formatData(data) { // Data is passed from the axios call within viewRoutes.js...
    // console.log('Here is the Data', data.stage.competitors);
    var masterData = data;
    // console.log('master daattaaa', masterData.stage);
    // This is an array with every stage. Use the stage's id key , then the competitor object to access the stage results object... 
    var fullSeason = data.stage.stages;
    console.log("TCL: formatData -> fullSeason", Array.isArray(fullSeason))
    var competitors = data.stage.competitors; // Returns a JSON obj with each competitors profile...
    var teams = data.stage.teams;
    var compArray = [];
    var resultsArray = []
    var RACE_ROUNDS = [];

    fullSeason.forEach(element => {
        var STAGE_ID = element.id;
        console.log('What is the element \n', element.id);

    });

    for (const driver in competitors) {
        if (competitors.hasOwnProperty(driver)) {
            // Drivers Data : 
            const driver_id = competitors[driver].id;
            const driver_name = competitors[driver].name;
            const driver_cnt = competitors[driver].country_code;
            const driver_team = competitors[driver].team.name;

            var COMP = new Competitor(driver_id, driver_name, driver_cnt, driver_team);
            compArray.push(COMP);
            // Team Data:
            // const team_id = competitors[driver].team.id;
            // const team_name = competitors[driver].team.name;
        }
    }
    // console.log("return comp", compArray);
    return compArray;
}