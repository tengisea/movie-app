import { axiosInstance } from "@/lib/axios-instance";
import { Key, Star } from "lucide-react";
import { MovieImage } from "./Movie";

type Upcoming = {
  id: number,
  posterPath: string,
  rating: number,
  title: string,
}

const getUpcomingMovies = async () => {
  const { data } = await axiosInstance("/movie/upcoming?language=en-US&page=1");
  return data.results as Upcoming;
};

export const Upcoming = async () => {
  const upcoming = await getUpcomingMovies();
  console.log("upcoming" ,upcoming);
  <Star size={16} color="#fff700" strokeWidth={3} />;

  return (
    <div>
      <div className="text-2xl">Upcoming</div>
      <div className="flex">
        {upcoming.map(({posterPath, id}) => (
          <MovieImage 
          key={id}/>
          posterPath={}
        )
        )}
      </div>
    </div>
  );
};
