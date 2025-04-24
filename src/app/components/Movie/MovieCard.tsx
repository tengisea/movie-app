import { axiosInstance } from "@/lib/axios-instance";
import { MovieImage, MovieTitle } from ".";

type Upcoming = {
  id: number;
  poster_path: string;
  vote_average: number;
  original_title: string;
};
type Popular = {
  id: number;
  poster_path: string;
  vote_average: number;
  original_title: string;
};

const getUpcomingMovies = async () => {
  const { data } = await axiosInstance("/movie/upcoming?language=en-US&page=1");
  return data.results as Upcoming[];
};

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data.results as Popular[];
};

export const MovieCard = async () => {
  const upcoming = await getUpcomingMovies();
    const popular = await getPopularMovies();
  console.log("upcoming", upcoming);

  return (
    <>
      <header className="">
        <div className="text-2xl font-semibold"></div>
        <div></div>
      </header>
      <div className="flex">
        {popular.map(({ id, poster_path }) => (
          <MovieImage key={id} posterPath={poster_path} />
        ))}
      </div>
      <div className="flex">
        {popular.map(({ id, vote_average, original_title }) => (
          <MovieTitle
            key={id}
            voteAverage={vote_average}
            originalTitle={original_title}
          />
        ))}
      </div>
    </>
  );
};
