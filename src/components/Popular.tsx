import { MovieCard} from "./Movie";
import { SeeMore } from "./Button";

type PopularProps = {
  popular: MovieDetail[];
};

export const Popular = async ({ popular }: PopularProps) => {
  return (
    <div className="px-5 md:px-20 flex flex-col gap-8 ">
      <header className="flex justify-between items-start">
        <div className="text-2xl font-semibold">Popular</div>
        <SeeMore />
      </header>

      <div className="flex justify-center flex-wrap gap-8 ">
        {popular
          .map((movie, index) => <MovieCard key={index} {...movie} />)
          .slice(0, 10)}
      </div>
    </div>
  );
};
