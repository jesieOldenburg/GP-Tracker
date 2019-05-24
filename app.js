const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
require('./controllers')(app);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log(`GET REQUEST`);
    res.render('landing');
});

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}!`));
module.exports = app;