const express = require('express')
const bodyParser = require('body-parser')

const { getEntries, setEntries, updateEntries, deleteEntries } = require('./controllers/entriesController.js')
const { registerUser, getMe, loginUser } = require('./controllers/userController.js')
const connectDB = require('./config/db')
const app = express()
const port = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json({ extended: true }))

connectDB()
app.listen(port)

//food meal routes

app.get('/api/entries', getEntries)

app.post('/api/entries', setEntries)

app.put('/api/entries/:id', updateEntries)

app.delete('/api/entries/:id', deleteEntries)

//user routes

app.post('/api/users', registerUser)

app.post('/api/users/login', loginUser)

app.get('/api/users/me', getMe)