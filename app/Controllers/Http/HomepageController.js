'use strict'

class HomepageController {
    index({view}) {
        return view.render('homepage')
    }
}

module.exports = HomepageController
