import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import api from '../services/api';
import MovieCard from './MovieCard';
import Loading from './Loading';
import { MovieInterface, MovieStatusInterface } from '../interfaces';
import { NOW_SHOWING, COMING_SOON } from '../constants';

type movieResultsType = { data: { attributes: MovieInterface }[] };

function parseMovieResults(movieResults: movieResultsType) {
  return movieResults.data.map((result) => result.attributes);
}

const Content = ({ movieStatus }: MovieStatusInterface) => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let response;
      if (movieStatus === NOW_SHOWING) {
        response = await api.get('/now-showing');
      } else if (movieStatus === COMING_SOON) {
        response = await api.get('/coming-soon');
      } else {
        throw new Error('Invalid movie status');
      }

      setMovies(parseMovieResults(response.data));
    };

    // Remove all movies to trigger the loading screen
    setMovies([]);

    // Fetch new movies
    fetchMovies();
  }, [movieStatus]);

  const renderMoviePosters = () => {
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
  };

  return (
    <div className="flex flex-wrap justify-center content-around">
      {renderMoviePosters()}
    </div>
  );
};

export default Content;
