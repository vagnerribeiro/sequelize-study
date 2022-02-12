'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */

    return queryInterface.createTable('blocks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      confirmations: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      version: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      version_hex: {
        type: Sequelize.STRING,
        allowNull: false
      },
      merkleroot: {
        type: Sequelize.STRING,
        allowNull: false
      },
      time: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      mediantime: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      nonce: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      bits: {
        type: Sequelize.STRING,
        allowNull: false
      },
      difficulty: {
        type: Sequelize.DECIMAL(20, 8),
        allowNull: false
      },
      chainwork: {
        type: Sequelize.STRING,
        allowNull: false
      },
      n_tx: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      previousblockhash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nextblockhash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      strippedsize: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */

    await queryInterface.dropTable('blocks')
  }
}
