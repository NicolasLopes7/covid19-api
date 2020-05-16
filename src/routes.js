const express = require('express')
const routes = express.Router()

const DataProvider = require('./Providers/DataProvider')

routes.get('/lastStatesData', DataProvider.getLastStateData)
routes.get('/allStatesData', DataProvider.getAllStateData)
routes.get('/:state', DataProvider.getDataByState)

module.exports = routes
