export interface MovieInterface {
  movieId: string;
  title: string;
  genre: string[];
  rating: string | null;
  runtime: number | null;
  synopsis: string | null;
  releaseDate: Date;
  nowShowing: boolean;
  comingSoon: boolean;
  poster: string | null;
}

export interface MovieCardPropsInterface {
  movie: MovieInterface;
}

export interface ContentStateInterface {
  movies: MovieInterface[];
}
