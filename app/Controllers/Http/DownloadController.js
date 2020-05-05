'use strict'

class DownloadController {
    async download({ params, session, response }) {
        try {
            await use('Transmission').addHash(params.hash)
            session.flash({ success: 'Movie download options have been added.' })
        } catch (e) {
            session.flash({ error: 'Transmission Error: ' + e.message })
        }
        return response.redirect('back')
    }
}

module.exports = DownloadController