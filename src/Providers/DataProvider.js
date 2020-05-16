const { getAllCases } = require('./utils/GetAllCases')
const { getLastCases } = require('./utils/GetLastCases')
const { GetAllCasesByState } = require('./utils/GetAllCasesByState')
const { estados } = require('../config/States')
module.exports = {
  async getLastStateData(req, res) {
    const cases = await getLastCases()

    return res.json({
      ConfirmedCasesBrazil: cases.ConfirmedCasesByState,
      ConfirmedDeathsBrazil: cases.ConfirmedDeathsByState,
      states: cases.dataState,
    })
  },

  async getAllStateData(req, res) {
    const cases = await getAllCases()

    return res.json({
      ConfirmedCasesBrazil: cases.ConfirmedCasesBrazil,
      ConfirmedDeathsBrazil: cases.ConfirmedDeathsBrazil,
      dataStates: cases.dataStates,
    })
  },

  async getDataByState(req, res) {
    const { state } = req.params
    const cases = await GetAllCasesByState(state)

    if (!(state in estados())) {
      return res.sendStatus(404)
    }
    res.json({
      ConfirmedCasesByState: cases.ConfirmedCasesByState,
      ConfirmedDeathsByState: cases.ConfirmedDeathsByState,
      dataByCity: cases.dataState,
    })
  },
}
