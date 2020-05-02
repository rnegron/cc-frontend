import React from 'react';
import MovieCard from './MovieCard';

const exampleMovie = {
  movieId: 1,
  title: 'Example Movie',
  genre: 'Action',
  rating: '5/5',
  runtime: 180,
  synopsis: 'A great movie!',
  releaseDate: new Date(),
  nowShowing: true,
  comingSoon: false,
  poster: null,
};

export default { title: 'Movie Card' };

export const withoutMovie = () => <MovieCard movie={{}} />;

export const withMovie = () => <MovieCard movie={exampleMovie} />;
