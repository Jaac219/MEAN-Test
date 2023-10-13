const express = require('express')
const router = express.Router()

const minerRouter = require('./miner')
const locationRouter = require('./location')
const uploadRouter = require('./upload')

router.use('/miner', minerRouter)
router.use('/location', locationRouter)
router.use('/upload', uploadRouter)

module.exports = router
