require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Credentials', true)
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

const aktivnosti = require('./routes/Aktivnost')
const dogodki = require('./routes/Dogodki')
const uporabniki = require('./routes/uporabnik')

app.get('/random', (req, res) => {
  res.send('Random string: ' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
})

app.get('/', (req, res) => {
  //res.send('Ta spletna stran je še v izdelavi ...')

  let host = String(req.headers.host)
  //change last char to 0
  host = host.slice(0, -1) + "0"
  
  let destination = "http://" + host + "/"

  console.log(destination)
  
  res.redirect(destination)
  //res.send('Ta spletna stran je še v izdelavi ...')
})

app.use('/aktivnosti/api', aktivnosti)
app.use('/dogodki/api', dogodki)
app.use('/uporabniki/api', uporabniki)
app.get('*', (req, res) => {
  res.send('Napačen URL 404')
})

const port = 3002
app.listen(port, () => {
  console.log(`Server posluša na portu: ${port}`)
})
