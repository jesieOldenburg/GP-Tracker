const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const path = require('path')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const axios = require('axios');

require('./controllers')(app);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('landing');
});

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}!`))