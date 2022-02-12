const Block = require('../models/Block')

module.exports = {
  async store (req, res) {
    const { hash, confirmations, height, version, version_hex, merkleroot, time, mediantime, nonce, bits, difficulty, chainwork, n_tx, previousblockhash, nextblockhash, strippedsize, size, weight } = req.body

    const block = await Block.create({
      hash, confirmations, height, version, version_hex, merkleroot, time, mediantime, nonce, bits, difficulty, chainwork, n_tx, previousblockhash, nextblockhash, strippedsize, size, weight
    })

    return res.json(block)
  }
}
