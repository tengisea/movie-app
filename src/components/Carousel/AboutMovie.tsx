import { Play, Star } from "lucide-react";
import { Button } from "../ui";

type MovieInfoType = {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  id: number;
};

export const AboutMovie = ({
  title,
  vote_average,
  overview,
  backdrop_path,
  id,
}: MovieInfoType) => {
  const originalTitle = `${title}`;
  const vote = Number(`${vote_average}`);
  const voteSimplifier = Math.round(Number(vote * 10)) / 10;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const trailer = `/movie/${id}/videos?language=en-US`;

  return (
    <div>
      <div
        className="relative h-60.5 md:h-170 bg-origin-content bg-contain md:bg-cover md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className="absolute left-1/7 bottom-1/5 text-white max-w-2xl flex-col justify-end hidden md:block">
          <div className="">Now Playing:</div>
          <h1 className="text-4xl font-bold mb-4">{originalTitle}</h1>
          <div className="flex gap-4 flex-col">
            <div className="flex items-center gap-1">
              <Star size={16} color="#FDE047" className="bg" fill="#FDE047" />
              <div className="text-small font-medium">{voteSimplifier}</div>
              <div className="text-[#71717A]">/10</div>
            </div>
            <div className="text-sm max-w-xl w-75">{overview}</div>
            <Button className="w-36.5">
              <Play /> Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col pl-10 md:hidden z-50">
        <div className="flex gap-5">
          <div>
            <div className="">Now Playing:</div>
            <h1 className="text-4xl font-bold mb-4">{originalTitle}</h1>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} color="#FDE047" className="bg" fill="#FDE047" />
            <div className="text-small font-medium">{voteSimplifier}</div>
            <div className="text-[#71717A]">/10</div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-sm max-w-xl w-75">{overview}</div>
          <Button className="w-36.5" onClick={VideoFrame}>
            <Play /> Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};
