const axios = require('axios')

const api = axios.create({
  baseURL: 'https://brasil.io/api/dataset/covid19/caso/data/',
})

module.exports = api
