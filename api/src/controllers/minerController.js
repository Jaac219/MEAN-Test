const MinerModel = require('../models/Miner.js')
const { v4: uuidv4 } = require('uuid')

const typesId = ['CC','CI', 'CE', 'TI', 'RC', 'PASSPORT']

const getAll = async (req, res) => {
  try {
    const miners = await MinerModel.find().lean()
    miners.map((miner)=>
      miner.fullName = `${miner.firstName} ${miner.lastName}`)
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

    if(miner) miner.fullName = `${miner.firstName} ${miner.lastName}`

    res.status(200).json(miner)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

const create = async (req, res) => {
  try {
    const insert = {
      firstName,
      lastName,
      typeId,
      identification,
      municipality
    } = req.body

    insert._id = uuidv4()

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
    if(!id) throw new Error('Id miner is required') 

    const {
      firstName,
      lastName,
      typeId,
      identification,
      municipality
    } = req.body

    const update = { $set: {} }

    if(firstName && firstName.trim()) update.$set.firstName = firstName
    if(lastName && lastName.trim()) update.$set.lastName = lastName
    if(typeId && typeId.trim()) update.$set.typeId = typeId
    if(identification) update.$set.identification = identification
    if(municipality && municipality.trim()) update.$set.municipality = municipality

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

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
  getTypesId
}