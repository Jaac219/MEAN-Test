const { join } = require('path')
const fs = require('fs/promises')

const getMinerImage = async (req, res) => {
  try {
    const { imgName } = req.params
    const imageRoute = join(__dirname, '..', `uploads/img/${imgName}`)
    const data = await fs.readFile(imageRoute)
    res.end(data)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

module.exports = {
  getMinerImage
}
