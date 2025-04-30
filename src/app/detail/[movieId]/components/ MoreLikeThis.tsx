import { MovieCard, SeeMore } from "@/components";

type MoreMovieProps = {
  moreMovies: MovieDetail[];
};

export const MoreLikeThis = ({ moreMovies }: MoreMovieProps) => {
  return (
    <div className="px-30 flex flex-col gap-8 pb-20">
      <header className="flex justify-between items-start">
        <div className="text-2xl font-semibold">More like this</div>
        <SeeMore />
      </header>

      <div className="flex items-start content-start self-stretch flex-wrap gap-8 ">
        {Array.isArray(moreMovies) &&
          moreMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} 
            />
          ))}
      </div>
    </div>
  );
};