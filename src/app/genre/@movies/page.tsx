import { MovieCard } from "@/components";
import { axiosInstance } from "@/lib/axios-instance";
import { GenreName } from "../components/GenreName";
import { DynamicPagination } from "@/common/DynamicPagination";
import page from "../page";

type MovieGenreFilter = {
  searchParams: {
    genreIds?: string;
    page?: number;
  };
};

const getMoviesByGenre = async (genreIds: string, page: number) => {
  const { data } = await axiosInstance(
    `/discover/movie?language=en&with_genres=${genreIds}&page=${page}`
  );
  return data.results;
};

const Movies = async ({
  searchParams: { genreIds = "", page = 1 },
}: MovieGenreFilter) => {
  const genreMovies = await getMoviesByGenre(genreIds, page);

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
        <DynamicPagination totalPage={Number(page)} />
      </div>
    </div>
  );
};

export default Movies;
