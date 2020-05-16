const axios = require('axios')

const api = axios.create({
  baseURL: 'https://brasil.io/',
})

module.exports = api
