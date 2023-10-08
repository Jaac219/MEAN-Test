const express = require('express')
const router = express.Router()

const minerRouter = require('./miner')
const locationRouter = require('./location')

router.use('/miner', minerRouter)
router.use('/location', locationRouter)

module.exports = router