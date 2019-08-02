'use strict'

class DownloadController {
    download({params, response}) {
        use('Transmission').addHash(params.hash)
        return response.route('homepage')
    }
}

module.exports = DownloadController
