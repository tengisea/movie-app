"use client";
import { MovieImage, MovieTitle } from ".";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui";
export const MovieCardSkeleton = () => {
  return (
    <div className="rounded-lg flex flex-col items-start gap-1 bg-[#F4F4F5] dark:bg-[#27272A]">
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
        <Skeleton className="h-full w-full rounded-t-lg" />
      </div>
      <div className="flex flex-col py-1 px-2 w-full gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
};

export const MovieCard = ({
  poster_path,
  vote_average,
  original_title,
  id
}: MovieDetail) => {
  const { push } = useRouter();

  const handleGoToDetailPage = (movieId: string) => () => {
    push(`/detail/${id}`);
  };
  
  return ( 
    <div
      onClick={handleGoToDetailPage("movieId")}
      className="rounded-lg flex flex-col items-start gap-1 bg-[#F4F4F5] dark:bg-[#27272A] "
      >
      <MovieImage posterPath={poster_path} />
 
      <div className="flex flex-col py-1 px-2 items-start self-stretch text-wrap line-clamp-2 wrap-break-word">
        <MovieTitle voteAverage={vote_average} originalTitle={original_title} />
      </div>
    </div>
  );
};
