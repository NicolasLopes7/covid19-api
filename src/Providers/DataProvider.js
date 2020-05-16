const { getAllCases } = require('../utils/GetAllCases')
const { getLastCases } = require('../utils/GetLastCases')
const { GetAllCasesByState } = require('../utils/GetAllCasesByState')
module.exports = {
  async getLastStateData(req, res) {
    const cases = await getLastCases()
    return res.json({
      ConfirmedCasesBrazil: cases.ConfirmedCasesBrazil,
      ConfirmedDeathsBrazil: cases.ConfirmedDeathsBrazil,
      states: cases.dataStates,
    })
  },

  async getAllStateData(req, res) {
    const cases = await getAllCases()
    return res.json({
      // ConfirmedCasesBrazil: cases.ConfirmedCasesByState,
      // ConfirmedDeathsBrazil: cases.ConfirmedDeathsByState,
      dataStates: cases.dataState,
    })
  },

  async getDataByState(req, res) {
    const { state } = req.params
    const cases = await GetAllCasesByState(state)

    res.json({
      ConfirmedCasesByState: cases.ConfirmedCasesByState,
      ConfirmedDeathsByState: cases.ConfirmedDeathsByState,
      dataByCity: cases.dataState,
    })
  },
}
