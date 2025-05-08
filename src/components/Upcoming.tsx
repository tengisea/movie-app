import { SeeMore, SeeMoreForMovies } from "./Button";
import { MovieCard} from "./Movie";
import { Skeleton } from "@/components/ui/skeleton";

type UpcomingProps = {
  upcoming: MovieDetail[];
};

export const Upcoming = ({ upcoming }: UpcomingProps) => {
  return (
    <div className="px-5 md:px-20 flex flex-col gap-8">
      <header className="flex justify-between items-start">
        <div className="text-2xl font-semibold">Upcoming</div>
        <SeeMoreForMovies/>
      </header>

      <div className="flex justify-center flex-wrap gap-5 md:gap-8 ">
        {upcoming.slice(0, 10).map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
