module.exports = {
  splitDataByState(estados, isLast) {
    const groups = estados.reduce((groups, estado) => {
      const state = estado.state
      if (!groups[state]) {
        groups[state] = []
      }
      if (isLast) {
        groups[state] = {
          confirmed: estado.confirmed,
          deaths: estado.deaths,
          death_rate: estado.death_rate,
          date: estado.date,
        }
      } else {
        groups[state].push({
          confirmed: estado.confirmed,
          deaths: estado.deaths,
          death_rate: estado.death_rate,
          date: estado.date,
        })
      }
      return groups
    }, {})

    const groupArrays = Object.keys(groups).map((state) => {
      return {
        state,
        data: groups[state],
      }
    })

    return groupArrays
  },
}
