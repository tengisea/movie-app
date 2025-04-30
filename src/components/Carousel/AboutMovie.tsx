import { Star } from "lucide-react";

type MovieInfoType = {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
};

export const AboutMovie = ({
  title,
  vote_average,
  overview,
  backdrop_path,
}: MovieInfoType) => {
  const originalTitle = `${title}`;
  const vote = Number(`${vote_average}`);
  const voteSimplifier = Math.round(Number(vote * 10)) / 10;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backdropUrl})` }}>
      <div className="absolute inset-0 " />
      <div className="absolute left-40 bottom-80 text-white p-8 max-w-2xl h-full flex flex-col justify-end">
        <div className="">Now Playing:</div>
        <h1 className="text-4xl font-bold mb-4">{originalTitle}</h1>
        <div className="flex gap-4 flex-col">
          <div className="flex items-center gap-1">
            <Star size={16} color="#FDE047" className="bg" fill="#FDE047" />
            <div className="text-small font-medium">{voteSimplifier}</div>
            <div className="text-[#71717A]">/10</div>
          </div>
          <div className="text-sm max-w-xl w-75">{overview}</div>
        </div>
      </div>
    </div>
  );
};
