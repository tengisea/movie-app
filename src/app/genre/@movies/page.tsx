import { MovieCard } from "@/components";
import { axiosInstance } from "@/lib/axios-instance";
import { GenreName } from "../components/GenreName";

type MovieGenreFilter = {
  searchParams: {
    genreIds?: string;
  };
};

const getMoviesByGenre = async (genreIds: string) => {
  const { data } = await axiosInstance(
    `/discover/movie?language=en&with_genres=${genreIds}&page=1`
  );
  return data.results;
};

const Movies = async ({
  searchParams: { genreIds = "" },
}: MovieGenreFilter) => {
  const genreMovies = await getMoviesByGenre(genreIds);

  return (
    <div className="flex pt-8 md:pt-0">
      <div className="md:border-l-1 md:px-4"></div>
      <div className=" flex flex-col gap-8">
        <div className="flex font-semibold text-xl md:text-2xl gap-1">
          {genreMovies.length}
          <GenreName genreIds={genreIds} />
        </div>
        <div className="flex justify-start self-stretch flex-wrap gap-8 ">
          {Array.isArray(genreMovies) &&
            genreMovies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
