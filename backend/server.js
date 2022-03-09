const express = require('express')
const { getEntries, setEntries, updateEntries, deleteEntries } = require('./controllers/entriesController.js')

const app = express()
const port = 5000

app.listen(port)

app.get('/api/entries', getEntries)

app.post('/api/entries', setEntries)

app.put('/api/entries/:id', updateEntries)

app.delete('/api/entries/:id', deleteEntries)