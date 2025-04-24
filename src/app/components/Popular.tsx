import { axiosInstance } from "@/lib/axios-instance";
import { MovieCard, MovieImage, MovieTitle } from "./Movie";

type Popular = {
  id: number;
  poster_path: string;
  vote_average: number;
  original_title: string;
};

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data.results as Popular[];
};

export const Popular = async () => {
  const popular = await getPopularMovies();
  console.log("poular", popular);

  return (
    <>
    <MovieCard/>
      {/* <header className="">
        <div className="text-2xl font-semibold">Upcoming</div>
        <div></div>
      </header>
      <div className="flex">
        {upcoming.map(({ id, poster_path }) => (
          <MovieImage key={id} posterPath={poster_path} />
        ))}
      </div>
        <div className="flex">
          {upcoming.map(({ id, vote_average, original_title }) => (
            <MovieTitle
              key={id}
              voteAverage={vote_average}
              originalTitle={original_title}
            />
          ))}
        </div> */}
    </>
  );
};