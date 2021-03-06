require('babel-register')

var compression = require('compression')
var express = require('express')
var path = require('path')

var app = express()
var API_SERVER_PORT = 3000

app.use(compression())
app.use('/', express.static(path.resolve('./dist')))

app.get('/api', function (req, res) {
  console.log('request url: ', req.originalUrl)
  res.json({ status: 'OK' })
})

app.listen(API_SERVER_PORT, function () {
  console.log('Express server is listening on http://localhost:' + API_SERVER_PORT)
})
