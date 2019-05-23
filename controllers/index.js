const fs = require('fs');

module.exports = (app) => {
    fs.readdirSync(`controllers/external_api/`).forEach((file) => {
        require(`./external_api/${file.substr(0, file.indexOf('.'))}`);
    })
}