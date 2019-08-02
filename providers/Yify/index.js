'use strict'

const YifyClient = require('@moviecast/yts-api').YtsApi

class Yify {
  constructor (Config) {
    this.Config = Config
    this.client = new YifyClient()
  }

  find(options) {
      return new Promise((resolve, reject) => this.client
        .getMovieList(options)
        .then(response => resolve(response.data.movies))
        .catch(error => reject(error))
      )
  }
}

module.exports = Yify