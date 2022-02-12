const { Model, DataTypes } = require('sequelize')

class Block extends Model {
  static init (sequelize) {
    super.init({
      hash: DataTypes.STRING,
      confirmations: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      version: DataTypes.INTEGER,
      version_hex: DataTypes.STRING,
      merkleroot: DataTypes.STRING,
      time: DataTypes.INTEGER,
      mediantime: DataTypes.INTEGER,
      nonce: DataTypes.INTEGER,
      bits: DataTypes.STRING,
      difficulty: DataTypes.DECIMAL(20, 8),
      chainwork: DataTypes.STRING,
      n_tx: DataTypes.INTEGER,
      previousblockhash: DataTypes.STRING,
      nextblockhash: DataTypes.STRING,
      strippedsize: DataTypes.INTEGER,
      size: DataTypes.INTEGER,
      weight: DataTypes.INTEGER
    }, {
      sequelize, modelName: 'blocks'
    })
  }
}

module.exports = Block
