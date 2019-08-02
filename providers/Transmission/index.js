'use strict'

const TransmissionClient = require('transmission')

class Transmission {
  constructor (Config) {
    this.Config = Config.get('transmission')
    this.client = new TransmissionClient(this.Config)
  }

  addHash(hash, options = {}) {
      return new Promise((resolve, reject) => this.client.addUrl('magnet:?xt=urn:btih:' + hash, {
          'download-dir': this.Config.downloadPath
      }, (error, response) => error ? reject(error) : resolve(response)))
  }
}

module.exports = Transmission