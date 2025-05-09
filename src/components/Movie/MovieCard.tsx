"use client";
import { MovieImage, MovieTitle } from ".";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui";
export const MovieCardSkeleton = () => {
  return (
    <div className="rounded-lg flex flex-col items-start gap-1 bg-[#F4F4F5] dark:bg-[#27272A]">
      <Skeleton className="w-full h-[300px] rounded-t-lg" />
      <div className="flex flex-col py-1 px-2 items-start self-stretch w-full">
        <Skeleton className="w-3/4 h-4 mb-1" />
        <Skeleton className="w-1/2 h-4" />
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

  const handleGoToDetailPage = () => () => {
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
