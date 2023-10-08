const MinerModel = require('../models/Miner.js')

const getAll = async (req, res) => {
  try {
    const miners = await MinerModel.find().lean()
    miners.map((miner)=>
      miner.fullName = `${miner.firstName} ${miner.lastName}`)
    res.status(200).json(miners)
  } catch (e) {
    console.error(e)
    return e
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
    return e
  }
}

module.exports = {
  getAll,
  getOne
}