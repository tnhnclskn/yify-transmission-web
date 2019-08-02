'use strict'

class HomepageController {
    index({request, response, view}) {
        return use('Yify').find({
            pageIndex: 1,
            pageSize: 20,
            quality: request.input('quality'), // 720p, 1080p, 3D
            rating_min: request.input('rating'), // [0, 9]
            term: request.input('term'),
            genre: request.input('genre'),
            sort_by: request.input('order_by'),
            // order_by: request.input('order_by'), // desc, asc
        }).then(movies => view.render('homepage', {
            movies: movies
        })).catch(error => view.render('homepage', {
            movies: []
        }))
        // })).catch(error => response.status(500).send(error))
    }
}

module.exports = HomepageController
