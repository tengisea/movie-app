"use client";

import { useFetchDataInClient } from "@/hooks/useFetchDataClient";
import { SearchLoading } from "./SearchLoading";
import { DynamicPagination } from "@/common/DynamicPagination";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { SeeMore } from "../Button";
import { SearchNoResultsFound } from "./SearchNoResultsFound";

type SearchValue = {
  searchValue: string;
  page: number;
};

export const SearchResultCard = ({ searchValue, page }: SearchValue) => {
  const { push } = useRouter();
  const { data, isLoading } = useFetchDataInClient(
    `/search/movie?query=${searchValue}&language=en-US&page=${page}`
  );
  if (isLoading) return <SearchLoading />;

  const movies = data?.results ?? ([] as MovieDetail[]);

  const handleGoToSearch = (searchValue: string) => () => {
    push(`/search?searchValue=${searchValue}`);
  };

  const handleGoToDetailPage = (movieId: number) => () => {
    push(`/detail/${movieId}`);
  };

  return (
    <>
      {movies.length !== 0 ? (
        <div className="flex flex-col items-start content-start self-stretch gap-4 pt-3">
          {movies
            .slice(0, 5)
            .map(
              (
                { id, title, vote_average, poster_path, release_date },
                index
              ) => {
                return (
                  <div key={index}>
                    <div className="flex gap-4 border-b-1 pb-3">
                      <img
                        src={`${process.env.TMDB_IMAGE_SERVICE_URL}/original${poster_path}`}
                        alt=""
                        width={67}
                        height={100}
                      />
                      <div className="flex flex-col font-semibold ">
                        <div className="text-xl font-semibold w-114">
                          {title}
                        </div>

                        <div className="flex">
                          <Star
                            color="#FDE047"
                            className="bg"
                            fill="#FDE047"
                            size={16}
                          />
                          {Math.round(Number(vote_average * 10)) / 10}
                          <div className="text-[#71717A]">/10</div>
                        </div>
                        <div className="flex gap-13 md:gap-0 md:justify-between">
                          {release_date}
                          <SeeMore handle={handleGoToDetailPage} id={id} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          <button
            onClick={handleGoToSearch(searchValue)}
            className="font-medium text-sm px-4 py-2 border-1 rounded">
            See all results for &quot;{searchValue}&quot;
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <SearchNoResultsFound />
        </div>
      )}

      <div className="hidden">
        <DynamicPagination totalPage={Number(page)} />
      </div>
    </>
  );
};
