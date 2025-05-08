// NOTE: The declaration below was injected by `"framer"`
// see https://www.framer.com/docs/guides/handshake for more information.
declare module "https://framer.com/m/*";

type MovieInter = {
  poster_path: string;
  vote_average: number;
};

type MovieDetail = {
  movieId: string;
  id: number;
  original_title: string;
} & MovieInter;

type MovieInfo = {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
};

type MovieDetailProps = {
  id:number
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  genres: string;
  vote_count: number;
} & MovieInter;

type CastMovieProps = {
  name: string;
  crew: string;
};

type SearchValue = {
  searchValue: string;
};
