"use client";

import { Play, Star } from "lucide-react";
import { Button } from "../ui";
import { useRouter } from "next/navigation";
import YouTube, { YouTubeProps } from "react-youtube";
import { useFetchDataInClient } from "@/hooks/useFetchDataClient";

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
  const { push } = useRouter();

  const handleGoToDetailPage = (id: string) => () => {
    push(`/detail/${id}`);
  };
  const originalTitle = `${title}`;
  const vote = Number(`${vote_average}`);
  const voteSimplifier = Math.round(Number(vote * 10)) / 10;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const { data } = useFetchDataInClient(`/movie/${id}/videos?language=en-US`);
  (data as any) ?? [];
  const trailer = data?.results?.[0]?.key;

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "40%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div
        onClick={handleGoToDetailPage}
        className="relative h-60.5 md:h-170 bg-origin-content bg-contain md:bg-cover md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div
          className="fixed inset-0 z-50 bg-black/70 items-center justify-center hidden"
          id="trailerModal"></div>
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
        <YouTube
          videoId={trailer}
          opts={opts}
          onReady={onPlayerReady}
          className="hidden"
        />
      </div>

      <div className=" flex flex-col pl-10 md:hidden h-full">
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
          <div className="text-sm max-w-xl h-full">{overview}</div>
          <div className="w-36.5 cursor-pointer">
            <Button
              className="cursor-pointer"
              onClick={() => {
                const modal = document.getElementById("trailerModal");
                if (modal) {
                  modal.style.display = "flex";
                  modal.onclick = (e) => {
                    if (e.target == modal) {
                      modal.style.display = "none";
                    }
                  };
                }
              }}>
              <Play /> Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
