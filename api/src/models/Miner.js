const { Schema, model } = require('mongoose')

const collectionName = 'miner'

const schema = new Schema({
  _id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  typeId: { 
    type: String, 
    enum: ['CC','CI', 'CE', 'TI', 'RC', 'PASSPORT'], 
    required: true
  },
  identification: { type: Number, required: true },
  municipality: { type: String, required: true },
  imgUrl: { type: String, default: '' }
}, {
  _id: false,
  versionKey: false,
  collection: collectionName
})

module.exports = model(collectionName, schema)