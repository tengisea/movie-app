import { axiosInstance } from "@/lib/axios-instance";
import { Key, Star } from "lucide-react";
import { MovieCard, MovieImage, MovieTitle } from "./Movie";

type Upcoming = {
  id: number;
  poster_path: string;
  vote_average: number;
  original_title: string;
};

const getUpcomingMovies = async () => {
  const { data } = await axiosInstance("/movie/upcoming?language=en-US&page=1");
  return data.results as Upcoming[];
};

export const Upcoming = async () => {
  const upcoming = await getUpcomingMovies();
  console.log("upcoming", upcoming);

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
