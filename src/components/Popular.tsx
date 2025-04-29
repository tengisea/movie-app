
import { MovieCard} from "./Movie";
import { SeeMore } from "./Button";

type PopularProps = {
  popular: MovieDetail[];
};

export const Popular = async ({ popular }: PopularProps) => {
  return (
    <div className="px-20 flex flex-col gap-8">
      <header className="flex justify-between items-start">
        <div className="text-2xl font-semibold">Popular</div>
        <SeeMore/>
      </header>

      <div className="flex items-start content-start self-stretch flex-wrap gap-8 ">
        {popular.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
