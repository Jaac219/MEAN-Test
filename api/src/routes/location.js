const express = require('express')
const router = express.Router()

const { getMunicipalities } = require('../controllers/locationController.js')

router.get('/municipality', getMunicipalities)

module.exports = router