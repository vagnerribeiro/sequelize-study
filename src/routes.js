const express = require('express')
const BlockController = require('./controllers/BlockController')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ hello: 'World' }
  )
})

routes.post('/block', BlockController.store)

module.exports = routes
