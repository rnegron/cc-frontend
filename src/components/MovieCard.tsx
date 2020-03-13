import React from 'react';
import { MovieCardPropsInterface } from '../interfaces';

class MovieCard extends React.Component<MovieCardPropsInterface, {}> {
  render() {
    const { movie } = this.props;
    return (
      <div className="flex flex-col content-center m-4 px-2 py-4">
        <a
          href={`https://caribbeancinemas.com/movie/${movie.movieId}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={movie.poster || ''} alt={`Poster for ${movie.title}`} />
        </a>
      </div>
    );
  }
}

export default MovieCard;
