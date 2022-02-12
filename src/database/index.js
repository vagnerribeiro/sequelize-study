const Sequelize = require('sequelize')

const dbCongig = require('../config/database')

const Block = require('../models/Block')

const connection = new Sequelize(dbCongig)

Block.init(connection)

module.exports = connection
