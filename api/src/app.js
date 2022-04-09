const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const routes = require('./routes/index.route.js')
const { json, urlencoded } = express
require('./db/models/index.js')

const server = express()

server.name = 'API'

server.use(json({ limit: '50mb' }))
server.use(urlencoded({ extended: true, limit: '50mb' }))
server.use(cookieParser())
server.use(morgan('dev'))
server.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

server.use('/', routes)

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

module.exports = server
