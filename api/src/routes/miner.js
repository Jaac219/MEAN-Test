const express = require('express')
const router = express.Router()

const { getAll, getOne } = require('../controllers/minerController.js')

router.get('/', getAll)
router.get('/:id', getOne)

module.exports = router