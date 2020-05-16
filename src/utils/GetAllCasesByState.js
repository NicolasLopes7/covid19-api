const api = require('../api')
const { sumOfArray } = require('./SumOfArray')
module.exports = {
  async GetAllCasesByState(state) {
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
    return { dataState, ConfirmedCasesByState, ConfirmedDeathsByState }
  },
}
