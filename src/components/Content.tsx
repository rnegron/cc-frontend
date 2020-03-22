import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import api from '../services/api';
import MovieCard from './MovieCard';
import Loading from './Loading';
import { MovieInterface, MovieStatusInterface } from '../interfaces';
import {
  NOW_SHOWING,
  COMING_SOON,
  NOW_SHOWING_PATH,
  COMING_SOON_PATH,
} from '../constants';

type movieResultsType = { data: { attributes: MovieInterface }[] };

function parseMovieResults(movieResults: movieResultsType) {
  return movieResults.data.map((result) => result.attributes);
}

const Content = ({ movieStatus }: MovieStatusInterface) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  const path =
    movieStatus === NOW_SHOWING ? NOW_SHOWING_PATH : COMING_SOON_PATH;

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const response = await api.get(`/${path}`);

      setMovies(parseMovieResults(response.data));
      setIsLoading(false);
    };

    // Fetch new movies
    fetchMovies();
  }, [movieStatus]);

  const renderMoviePosters = () => {
    if (isLoading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    if (isEmpty(movies)) {
      return (
        <div className="flex flex-col text-center py-24">
          <p className="text-2xl">No movies found!</p>
          <a
            className="pt-2 font-light text-blue-500 hover:underline"
            href={`https://caribbeancinemas.com/${path}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check the official site
          </a>
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
