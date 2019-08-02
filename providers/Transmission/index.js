'use strict'

const YifyClient = require('yts-client')

class Queue {
  constructor (Config) {
    this.Config = Config
    this.client = new YifyClient()
  }

  find(options) {
      return new Promise((resolve, reject) => this.client
        .find(options,
            (error, response) => error ? reject(error) : resolve(response))
      )
  }
}

module.exports = Queue