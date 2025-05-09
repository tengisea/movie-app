"use client";

import { Play, Star } from "lucide-react";
import { Badge } from "@/components/ui";
import YouTube, { YouTubeProps } from "react-youtube";
import { useFetchDataInClient } from "@/hooks/useFetchDataClient";

type DetailProps = {
  detail: MovieDetailProps[];
  cast: CastMovieProps[];
};

export const MovieDetail = ({ detail, cast }: DetailProps) => {
  const sumVote = Number(`${detail.vote_count}`);
  const simplifiedVote = Math.floor(Number(sumVote / 1000));
  const vote = Number(`${detail.vote_average}`);
  const posterPath = detail.poster_path;
  const voteSimplifier = Math.round(Number(vote * 10)) / 10;
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/original${posterPath}`;
  const phoneImageurl = `${process.env.TMDB_IMAGE_SERVICE_URL}/original${posterPath}`;
  const genres = detail.genres;
  const backdropPath = detail.backdrop_path;
  const backdropUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/original${backdropPath}`;

  const { data } = useFetchDataInClient(
    `/movie/${detail.id}/videos?language=en-US`
  );
  (data as string) ?? [];
  const trailer = data?.results?.[0]?.key;

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "70%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col px-5 md:px-30 gap-6">
      <div className="flex gap-10 md:justify-between">
        <div>
          <div className="font-bold text-2xl md:text-4xl">{detail.title}</div>
          <div className="text-lg">
            {detail.release_date} • {detail.runtime}m
          </div>
        </div>
        <div className="font-xs ">
          <div className="hidden md:block">Rating</div>
          <div className="flex gap-1">
            <div className="flex items-center">
              <Star size={28} fill="#FDE047" color="#FDE047" />
            </div>
            <div>
              <div className="flex text-lg font-semibold items-center">
                {voteSimplifier}{" "}
                <div className="font-normal text-base opacity-80">/10</div>
              </div>
              <div className="opacity-80">{simplifiedVote}k</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col gap-8.5 ">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-2">
          <img
            src={imageUrl}
            width={290}
            height={428}
            alt=""
            className="hidden md:block"
          />
          <img
            src={phoneImageurl}
            width={100}
            height={148}
            alt=""
            className="md:hidden max-w-100"
          />
          <div
            className="fixed inset-0 z-50 bg-black/70 items-center justify-center hidden"
            id="trailerModal">
            <YouTube
              videoId={trailer}
              opts={opts}
              onReady={onPlayerReady}
              className="w-[100vw] md:w-[80vw] h-[70vw] md:h-[70vw]"
            />
          </div>
          <div
            className="w-[375px] md:w-[800px] h-[211px] md:h-107 relative opacity-80 dark:opacity-50 rounded overflow-hidden bg-center bg-contain  bg-no-repeat"
            style={{ backgroundImage: `url(${backdropUrl})` }}>
            <div className="left-2 top-40 md:left-[24px] md:top-[364px] absolute inline-flex justify-start items-center gap-3">
              <div
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center gap-2 cursor-pointer"
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
                <Play color="black" size={16} />
              </div>
              <div className="justify-start text-white dark:text-gray-200 ">Play trailer </div>
            </div>
          </div>
        </div>

        <div className="flex self-stretch flex-wrap gap-5">
          <div className="flex gap-3 self-stretch flex-wrap">
            {genres.map(({ name }, index) => {
              return (
                <Badge
                  variant={"outline"}
                  key={index}
                  className="px-1.5 font-bold border-1 border-solid border-[#E4E4E7] dark:border-[#27272A] rounded-full">
                  {name}
                </Badge>
              );
            })}
          </div>
          <div>{detail.overview}</div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-13">
          <div className="font-bold w-18 ">Director</div>
          <div>{cast.crew?.[0]?.name}</div>
        </div>
        <div className="flex gap-13 ">
          <div className="font-bold w-22">Writers</div>
          <div>
            {cast.crew?.[1]?.name} · {cast.crew?.[2]?.name} ·{" "}
            {cast.crew?.[3]?.name}
          </div>
        </div>
        <div className="flex gap-13">
          <div className="font-bold w-25">Stars</div>
          <div>
            {cast.cast?.[0]?.name} · {cast.cast?.[1]?.name} ·{" "}
            {cast.cast?.[2]?.name}
          </div>
        </div>
      </div>
    </div>
  );
};
