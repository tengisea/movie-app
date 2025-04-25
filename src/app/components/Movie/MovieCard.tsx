import { axiosInstance } from "@/lib/axios-instance";
import { MovieImage, MovieTitle } from ".";

export const MovieCard = ({
  poster_path,
  vote_average,
  original_title,
}: MovieDetail) => {
  return (
    <div className="rounded-lg flex flex-col items-start gap-1 bg-[#F4F4F5] dark:bg-[#27272A] ">
      <MovieImage posterPath={poster_path} />

      <div className="flex flex-col py-1 px-2 items-start self-stretch text-wrap line-clamp-2 wrap-break-word">
        <MovieTitle voteAverage={vote_average} originalTitle={original_title} />
      </div>
    </div>
  );
};
