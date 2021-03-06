const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 5000
app.listen(PORT)
