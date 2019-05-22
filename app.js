const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/main.handlebars')))

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}!`))