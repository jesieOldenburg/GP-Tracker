module.exports = function formatData(data) {
    console.log(typeof data);
    var raceRound = data.stage.stages;
    var competitors = data.stage.competitors; // Returns a JSON obj with each competitors profile...
    var teams = data.stage.teams;

    console.log('what type is race round', typeof raceRound)
    for (const driver in competitors) {
        if (competitors.hasOwnProperty(driver)) {
            const driver_id = competitors[driver].id;
            const driver_name = competitors[driver].name;
            console.log('driver_id === ', driver_id + '\n' +
                'driver_name === ' + driver_name
            );
            console.log();



        }
    }
    //     var domCard = ` <div class="col s12 m7">
    //         <div class="card">
    //             <div class="card-image">
    //                 <img src="images/sample-1.jpg">
    //                 <span class="card-title">Card Title</span>
    //             </div>
    //             <div class="card-content">
    //                 <p>I am a very simple card. I am good at containing small bits of information.
    //                 I am convenient because I require little markup to use effectively.</p>
    //             </div>

    //         </div>
    //     </div>`



}