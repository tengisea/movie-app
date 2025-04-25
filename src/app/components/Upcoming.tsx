import { MovieCard} from "./Movie";

type UpcomingProps = {
  upcoming: MovieDetail[];
};

export const Upcoming = ({ upcoming }: UpcomingProps) => {
  return (
    <div className="px-20 flex flex-col gap-8">
      <header className="">
        <div className="text-2xl font-semibold">Upcoming</div>
      </header>

      <div className="flex items-start content-start self-stretch flex-wrap gap-8 ">
        {upcoming.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
