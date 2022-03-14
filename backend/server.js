const express = require('express')
const bodyParser = require('body-parser')

const { getEntries, setEntries, updateEntries, deleteEntries } = require('./controllers/entriesController.js')
const connectDB = require('./config/db')
const app = express()
const port = 5000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json({ extended: true }))
connectDB()
app.listen(port)

app.get('/api/entries', getEntries)

app.post('/api/entries', setEntries)

app.put('/api/entries/:id', updateEntries)

app.delete('/api/entries/:id', deleteEntries)