const api = require('../api')

const { sumOfArray } = require('./SumOfArray')
const { splitDataByState } = require('./SplitDataByState')

module.exports = {
  async getAllCases() {
    let brasil = await api.get(
      '/api/dataset/covid19/caso/data?place_type=state&is_last=False'
    )

    let dataBrazil = brasil.data.results
    const dataStates = splitDataByState(dataBrazil, false)
    let ConfirmedCasesBrazil = sumOfArray(
      dataBrazil.map((state) => state.confirmed)
    )
    let ConfirmedDeathsBrazil = sumOfArray(
      dataBrazil.map((state) => state.deaths)
    )

    return {
      ConfirmedCasesBrazil,
      ConfirmedDeathsBrazil,
      dataStates,
    }
  },
}
