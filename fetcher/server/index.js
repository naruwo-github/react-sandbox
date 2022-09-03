const SERVER_PORT = require('../src/config')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const users = [
  'a',
  'b',
  'c'
]

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(SERVER_PORT, () => {
  console.log('running...')
})
