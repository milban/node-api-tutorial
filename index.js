const express = require('express')
const logger = require('morgan')
const app = express()
const user = require('./api/user')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', user)

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app