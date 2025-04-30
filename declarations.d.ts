// NOTE: The declaration below was injected by `"framer"`
// see https://www.framer.com/docs/guides/handshake for more information.
declare module "https://framer.com/m/*";

type MovieDetail = {
  id: number;
  poster_path: string;
  vote_average: number;
  original_title: string;
};

type MovieInfo = {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path:string;
};

type MovieDetailProps = {
  title: string;
  genres: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  overview: string;
  backdrop_path: string;
  vote_count:number;
};

type CastMovieProps= {
  name: string;
  crew:string;
  
}