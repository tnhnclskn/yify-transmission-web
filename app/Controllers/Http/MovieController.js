'use strict'

class MovieController {
  index({ request, response, view }) {
    return use('Yify').find({
      limit: 20,
      page: 1,
      quality: request.input('quality'),
      minimumRating: request.input('rating'),
      queryTerm: request.input('term'),
      genre: request.input('genre'),
      sortBy: request.input('sort_by'),
      orderBy: request.input('order_by'), // desc, asc
      withRtRatings: false
    }).then(movies => view.render('homepage', {
      movies: movies
    })).catch(error => view.render('homepage', {
      movies: []
    }))
    // })).catch(error => response.status(500).send(error))
  }
}

module.exports = MovieController
