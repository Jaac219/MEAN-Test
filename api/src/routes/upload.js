const express = require('express')
const router = express.Router()

const { getMinerImage } = require('../controllers/uploadController.js')

router.get('/img/:imgName', getMinerImage)

module.exports = router