const express = require('express')
const router = express.Router()

const { getAll, getOne, deleteOne, create, update, getTypesId } = require('../controllers/minerController.js')

router.get('/typesId', getTypesId)
router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', deleteOne)

module.exports = router