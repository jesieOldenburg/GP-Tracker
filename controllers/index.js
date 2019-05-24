const fs = require('fs');

module.exports = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        // console.log("file", file)
        require(`./${file.substr(0, file.indexOf('.'))}`);
    })
}