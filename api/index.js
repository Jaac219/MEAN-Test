require('dotenv').config()
require('./src/db.js')

const { initApp } = require('./src/app.js')
const port = process.env.PORT || 3000

initApp(port)