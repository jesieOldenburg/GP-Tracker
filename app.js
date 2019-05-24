const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
require('./controllers')(app);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('landing');
});

app.post('/users', (req, res) => {
    return res.send('POST Request to API homes');
});

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}!`));