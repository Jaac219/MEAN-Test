const axios = require('axios')
const externalApiUrl = process.env.EXTERNAL_API_URL

const getMunicipalities = () => axios.get(externalApiUrl)

module.exports = {
  getMunicipalities
}