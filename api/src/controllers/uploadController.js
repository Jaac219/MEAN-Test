const { join } = require('path')
const fs = require('fs')

const getMinerImage = (req, res) =>{
  try {
    const { imgName } = req.params
    console.log(imgName);

    const imageRoute = join(__dirname, '..', `uploads/img/${imgName}`)
    fs.readFile(imageRoute, (err, data) => {
      if (err) {
        console.error('Error al leer la imagen:', err);
        return res.status(500).send('Error al cargar la imagen');
      }

      res.end(data);
    });
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

module.exports = {
  getMinerImage
}