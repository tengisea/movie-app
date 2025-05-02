import { MovieCard, SeeMore } from "@/components";

type MoreMovieProps = {
  moreMovies: MovieDetail[];
};

export const MoreLikeThis = ({ moreMovies }: MoreMovieProps) => {
  return (
    <div className="px-5 md:px-30 flex flex-col justify-center gap-5 md:gap-8 pb-20">
      <header className="flex justify-between items-start">
        <div className="text-2xl font-semibold">More like this</div>
        <SeeMore />
      </header>

      <div className="flex items-start justify-center self-stretch flex-wrap gap-8 ">
        {Array.isArray(moreMovies) &&
          moreMovies
            .map((movie, index) => <MovieCard key={index} {...movie} />)
            .slice(0, 5)}
      </div>
    </div>
  );
};