const api = require('../api')
const { sumOfArray } = require('./SumOfArray')
const { splitDataByState } = require('./SplitDataByState')
module.exports = {
  async getLastCases() {
    let stateReq = await api.get(
      '/api/dataset/covid19/caso/data?place_type=state&is_last=True'
    )

    let dataState = stateReq.data.results

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

    dataState = splitDataByState(dataState, true)
    return { dataState, ConfirmedCasesByState, ConfirmedDeathsByState }
  },
}
