import { axiosInstance } from "@/lib/axios-instance";
import { MovieCard, MovieImage, MovieTitle } from "./Movie";

type PopularProps = {
  popular: MovieDetail[];
};

export const Popular = async ({ popular }: PopularProps) => {
  return (
    <div className="px-20 flex flex-col gap-8">
      <header className="">
        <div className="text-2xl font-semibold">Popular</div>
      </header>

      <div className="flex items-start content-start self-stretch flex-wrap gap-8 ">
        {popular.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
