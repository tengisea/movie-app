import { axiosInstance } from "@/lib/axios-instance";
import { Key, Star } from "lucide-react";
import { MovieImage } from "./Movie";

type Upcoming = {
  id: number;
  poster_path: string;
  rating: number;
  title: string;
};

const getUpcomingMovies = async () => {
  const { data } = await axiosInstance("/movie/upcoming?language=en-US&page=1");
  return data.results as Upcoming[];
};

export const Upcoming = async () => {
  const upcoming = await getUpcomingMovies();
  console.log("upcoming", upcoming);
  // <Star size={16} color="#fff700" strokeWidth={3} />;

  return (
    <>
      <header className="">
        <div className="text-2xl font-semibold">Upcoming</div>
        <div></div>
      </header>
      <div className="flex">
        {upcoming.map(({ id, poster_path }) => (
          <MovieImage key={id} posterPath={poster_path} />
        ))}
      </div>
    </>
  );
};
