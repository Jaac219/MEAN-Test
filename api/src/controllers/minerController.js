const MinerModel = require('../models/Miner.js')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs/promises')
const { join, extname } = require('path')

const typesId = ['CC', 'CI', 'CE', 'TI', 'RC', 'PASSPORT']

const getAll = async (req, res) => {
  try {
    const { municipality, typeId } = req.query
    const query = {}

    if (municipality) query.municipality = { $regex: municipality, $options: 'i' }
    if (typeId) query.typeId = typeId

    const miners = await MinerModel.find(query).lean()
    miners.map((miner) => {
      miner.fullName = `${miner.firstName} ${miner.lastName}`
      return miner
    })

    res.status(200).json(miners)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

const getOne = async (req, res) => {
  try {
    const { id } = req.params
    const miner = await MinerModel.findById(id).lean()

    if (miner) miner.fullName = `${miner.firstName} ${miner.lastName}`

    res.status(200).json(miner)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

const create = async (req, res) => {
  try {
    let imgUrl = ''

    const {
      firstName,
      lastName,
      typeId,
      identification,
      municipality
    } = req.body

    const insert = {
      firstName,
      lastName,
      typeId,
      identification,
      municipality
    }

    insert._id = uuidv4()
    const img = req.file

    if (img) {
      const newFileName = `${insert._id}${extname(img.originalname)}`
      imgUrl = await saveImage(img, newFileName)
    }

    if (imgUrl) insert.imgUrl = imgUrl

    const miner = await new MinerModel(insert).save()
    res.status(200).send(miner?._id || {})
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) throw new Error('Id miner is required')

    let imgUrl = ''
    const {
      firstName,
      lastName,
      typeId,
      identification,
      municipality
    } = req.body

    const img = req.file
    if (img) {
      const newFileName = `${id}${extname(img.originalname)}`
      imgUrl = await saveImage(img, newFileName)
    }

    const update = { $set: {} }

    if (firstName && firstName.trim()) update.$set.firstName = firstName
    if (lastName && lastName.trim()) update.$set.lastName = lastName
    if (typeId && typeId.trim()) update.$set.typeId = typeId
    if (identification) update.$set.identification = identification
    if (municipality && municipality.trim()) update.$set.municipality = municipality
    if (imgUrl) update.$set.imgUrl = imgUrl

    const miner = await MinerModel.findByIdAndUpdate(id, update)
    res.status(200).send(miner?._id || {})
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params
    await MinerModel.deleteOne({ _id: id })

    res.status(200).send(true)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

const getTypesId = (req, res) => res.send(typesId)

const saveImage = async (img, fileName) => {
  const filePath = join(__dirname, '..', 'uploads', 'img', fileName)
  try {
    await fs.writeFile(filePath, img.buffer)
    return `${process.env.UPLOAD_URL}/img/${fileName}`
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
  getTypesId
}
