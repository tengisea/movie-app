import { SeeMore } from "./Button";
import { MovieCard} from "./Movie";

type UpcomingProps = {
  topRated: MovieDetail[];
};

export const TopRated = ({ topRated }: UpcomingProps) => {
  return (
    <div className="px-5 md:px-20 flex flex-col gap-8">
      <header className="flex justify-between items-start">
        <div className="text-2xl font-semibold">Top Rated</div>
        <SeeMore />
      </header>

      <div className="flex justify-center flex-wrap gap-8 ">
        {topRated.slice(0, 10).map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};