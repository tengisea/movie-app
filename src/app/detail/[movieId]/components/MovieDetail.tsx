import { Star } from "lucide-react";
import { Badge } from "@/components/ui";

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
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/w342${posterPath}`;
  const trailer = `/movie/${detail.id}/videos?language=en-US`;
  const genres= detail.genres

  return (
    <div className="flex flex-col px-30 gap-6">
      <div className="flex justify-between">
        <div>
          <div className="font-bold text-4xl">{detail.title}</div>
          <div className="text-lg">
            {detail.release_date} • {detail.runtime}m
          </div>
        </div>
        <div className="font-xs ">
          Rating
          <div className="flex gap-1">
            <div className="flex items-center">
              <Star size={28} fill="#FDE047" color="#FDE047"  />
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
      <img src={imageUrl} width={290} height={428} alt="" />
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          {genres.map(({ id, name }, index) => {
            const genreId = id.toString();
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
        <div className="flex gap-13">
          <div className="font-bold w-16">Director</div>
          <div>{cast.crew[0].name}</div>
        </div>
        <div className="flex gap-13 ">
          <div className="font-bold w-16">Writers</div>
          <div>
            {cast.crew[1].name} · {cast.crew[2].name} · {cast.crew[3].name}
          </div>
        </div>
        <div className="flex gap-13">
          <div className="font-bold w-16">Stars</div>
          <div>
            {cast.cast[0].name} · {cast.cast[1].name} · {cast.cast[2].name}
          </div>
        </div>
      </div>
    </div>
  );
};
