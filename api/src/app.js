const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json({ limit: '512mb' }))
app.use('/api/v1', routes)

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err.toString();
  res.status(status).send(message);
})

const initApp = (port) => {
  app.listen(port, ()=>{
    console.log(`🚀 [Api] Listening in port: ${port}`);
  })
}

module.exports = {
  initApp
}

