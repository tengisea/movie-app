import { MovieCard} from "./Movie";

type UpcomingProps = {
  topRated: MovieDetail[];
};

export const TopRated = ({ topRated }: UpcomingProps) => {
  return (
    <div className="px-20 flex flex-col gap-8">
      <header className="">
        <div className="text-2xl font-semibold">Top Rated</div>
      </header>

      <div className="flex items-start content-start self-stretch flex-wrap gap-8 ">
        {topRated.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};