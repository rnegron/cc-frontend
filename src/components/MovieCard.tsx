import React from 'react';
import { MovieCardPropsInterface } from '../interfaces';

class MovieCard extends React.Component<MovieCardPropsInterface, {}> {
  render() {
    const { movie } = this.props;
    return (
      <div className="transition duration-300 ease-out transform md:hover:-translate-y-1 md:hover:scale-110 w-1/2 md:w-auto px-2 md:m-4 md:px-2 pt-8 pb-1 rounded overflow-hidden shadow-xl">
        <a
          className="flex flex-initial flex-col content-center"
          href={`https://caribbeancinemas.com/movie/${movie.movieId}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-center"
            src={movie.poster || ''}
            alt={`Poster for ${movie.title}`}
          />

          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2 text-center">{movie.title}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default MovieCard;
