const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
require('./controllers/viewRoutes')(app);
require('./controllers/sr_apiCalls')(app);
require('./externalAPI_Logic/GET_seasons');
require('./externalAPI_Logic/dataFormatter');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.get('/', (req, res) => {
//     console.log("GET REQ")
//     res.render('sign_in');
// });

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}!`));