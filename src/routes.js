const express = require('express')
const routes = express.Router()

const DataProvider = require('./Providers/DataProvider')

routes.get('/', DataProvider.getRNData)

module.exports = routes
