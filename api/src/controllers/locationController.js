const locationService = require('../services/locationService')

const getMunicipalities = async (req, res) => {
  try {
    const { data } = await locationService.getMunicipalities()
    let rs = []

    if(data) rs = data.map((val)=>val.municipio)

    res.status(200).json(rs)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

module.exports = {
  getMunicipalities
}