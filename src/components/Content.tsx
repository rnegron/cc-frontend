import React from 'react';
import isEmpty from 'lodash/isEmpty';

import api from '../services/api';
import MovieCard from './MovieCard';
import { ContentStateInterface, MovieInterface } from '../interfaces';
import Loading from './Loading';

function parseMovieResults(movieResults: {
  data: { attributes: MovieInterface }[];
}) {
  return movieResults.data.map((result) => result.attributes);
}

class Content extends React.Component<{}, ContentStateInterface> {
  state: ContentStateInterface = { movies: [] };

  async componentDidMount() {
    // Perform API call to get movies
    const response = await api.get('/');
    this.setState({ movies: parseMovieResults(response.data) });
  }

  renderMoviePosters() {
    const { movies } = this.state;

    if (isEmpty(movies)) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return movies.map((movie) => (
      <MovieCard key={movie.movieId} movie={movie} />
    ));
  }

  render() {
    return (
      <div className="flex flex-wrap justify-center">
        {this.renderMoviePosters()}
      </div>
    );
  }
}

export default Content;
