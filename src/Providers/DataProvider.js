const api = require('../api')
const { sumOfArray } = require('../utils/SumOfArray')
const { splitDataByState } = require('../utils/SplitDataByState')
const { getAllCases } = require('../utils/GetAllCases')

module.exports = {
  async getLastStateData(req, res) {
    const cases = await getAllCases()
    return res.json({
      ConfirmedCasesBrazil: cases.ConfirmedCasesBrazil,
      ConfirmedDeathsBrazil: cases.ConfirmedDeathsBrazil,
      dataStates: cases.dataStates,
    })
  },

  async getAllStateData(req, res) {
    let brasil = await api.get(
      '/api/dataset/covid19/caso/data?place_type=state&is_last=False'
    )
    let cases = await getAllCases()
    let dataBrazil = brasil.data.results
    let dataStates = splitDataByState(dataBrazil, false)

    return res.json({
      ConfirmedCasesBrazil: cases.ConfirmedCasesBrazil,
      ConfirmedDeathsBrazil: cases.ConfirmedDeathsBrazil,
      dataStates,
    })
  },

  async getDataByState(req, res) {
    const { state } = req.params
    let stateReq = await api.get(
      `/api/dataset/covid19/caso/data/?format=json&is_last=True&state=${state}`
    )

    let dataState = stateReq.data.results.filter(
      (instant) => instant.city != null
    )

    dataState.forEach((city, index) => {
      dataState[index] = {
        city: city.city,
        confirmed: city.confirmed,
        deaths: city.deaths,
        death_rate: city.death_rate,
        confirmed_per_100k_inhabitants: city.confirmed_per_100k_inhabitants,
      }
    })

    dataState.sort((a, b) => {
      if (a.deaths > b.deaths) {
        return -1
      } else if (a.deaths < b.deaths) {
        return 1
      }
      return 0
    })

    let ConfirmedCasesByState = sumOfArray(
      dataState.map((city) => city.confirmed)
    )
    let ConfirmedDeathsByState = sumOfArray(
      dataState.map((city) => city.deaths)
    )

    res.json({
      ConfirmedCasesByState,
      ConfirmedDeathsByState,
      dataByCity: dataState,
    })
  },
}
