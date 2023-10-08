const { Schema, model } = require('mongoose')

const collectionName = 'miner'

const schema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  typeId: { 
    type: String, 
    enum: ['CC','CI', 'CE', 'TI', 'RC', 'PASSPORT'], 
    require: true
  },
  identification: { type: Number, require: true },
  municipality: { type: String, require: true },
  imgUrl: { type: String, default: '' }
}, {
  _id: false,
  versionKey: false,
  collection: collectionName
})

module.exports = model(collectionName, schema)