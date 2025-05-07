import { MovieCard } from "@/components";
import { axiosInstance } from "@/lib/axios-instance";
import { DynamicPagination } from "@/common/DynamicPagination";


type MovieSearchFilter = {
  searchParams: {
    searchValue?: string;
    page?: number
  }
}

const getMoviesBySearchValue = async (searchValue: string, page: number) => {
  const { data } = await axiosInstance(
    `/search/movie?query=${searchValue}&language=en-US&page=${page}`
  );
  return data.results;
};

const MoviesSearch = async ({
  searchParams: { searchValue = "", page = 1 },
}: MovieSearchFilter) => {
  const searchMovies = await getMoviesBySearchValue(searchValue, page);

  return (
    <div className="flex pt-8 md:pt-0">
      <div className="md:border-l-1 md:px-4"></div>
      <div className=" flex flex-col gap-8">
        <div className="flex font-semibold text-xl md:text-2xl gap-1">
          {searchValue.length}
          results for "{searchValue}"
        </div>
        <div className="flex justify-start self-stretch flex-wrap gap-8 ">
          {Array.isArray(searchMovies) &&
            searchMovies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
        </div>
        <DynamicPagination totalPage={Number(page)} />
      </div>
    </div>
  );
};

export default MoviesSearch;
