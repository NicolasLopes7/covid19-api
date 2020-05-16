const api = require('../api')
const splitDataByDate = (cases) => {
  const groups = cases.reduce((groups, cidades) => {
    const dateAux = cidades.date
    if (!groups[dateAux]) {
      groups[dateAux] = []
    }
    groups[dateAux].push(cidades)
    return groups
  }, {})

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      cidades: groups[date],
    }
  })

  return groupArrays
}

module.exports = {
  async getRNData(req, res) {
    let response = await api.get(
      '/api/dataset/covid19/caso/data/?format=json&is_last=False&state=RN'
    )
    response = response.data.results
    response = splitDataByDate(response)
    return res.json()
  },
}
