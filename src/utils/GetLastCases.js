const api = require('../api')
const { sumOfArray } = require('./SumOfArray')
module.exports = {
  async getLastCases(state) {
    let stateReq = await api.get(
      `/api/dataset/covid19/caso/data/?format=json&is_last=True&state=${state}`
    )

    let dataState = stateReq.data.results.filter(
      (instant) => instant.city != null
    )

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

    return { dataState, ConfirmedCasesByState, ConfirmedDeathsByState }
  },
}
