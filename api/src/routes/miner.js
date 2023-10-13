const express = require('express')
const multer = require('multer')

const router = express.Router()
const upload = multer()

const { getAll, getOne, deleteOne, create, update, getTypesId } = require('../controllers/minerController.js')

router.get('/typesId', getTypesId)
router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', upload.single('img'), create)
router.patch('/:id', upload.single('img'), update)
router.delete('/:id', deleteOne)

module.exports = router
