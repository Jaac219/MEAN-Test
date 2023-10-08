const mongoose = require('mongoose')

const db = process.env.MONGO_URL
mongoose.connect(db).then(() => {
    console.log('🚀 [Db connection] successful connection')
  }).catch((err) => {
    console.error(`❌[Db connection] error connection \n ${err.message ?? err}`)
  })