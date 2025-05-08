import { MovieCard} from "./Movie";
import { SeeMore, SeeMoreForMovies } from "./Button";

type PopularProps = {
  popular: MovieDetail[];
};

export const Popular = async ({ popular }: PopularProps) => {
  return (
    <div className="px-5 md:px-20 flex flex-col gap-8 ">
      <header className="flex justify-between items-start">
        <div className="text-2xl font-semibold">Popular</div>
<SeeMoreForMovies/>
      </header>

      <div className="flex justify-center flex-wrap gap-8 ">
        {popular.slice(0, 10).map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
