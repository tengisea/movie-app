import { Star } from "lucide-react";

type MovieInfoType = {
  title: string;
  vote_average: number;
  overview: string;
};

export const AboutMovie = ({ title, vote_average, overview }: MovieInfoType) => {
  const originalTitle = `${title}`;
  const vote = Number(`${vote_average}`);
  const voteSimplifier = Math.round(Number(vote * 10)) / 10;

  return (
    <div>
      <div className="flex">Now Playing:</div>
      <h1 className="text-4xl font-bold">{originalTitle}</h1>

      <div className="flex gap-4 flex-col">
        <div className="flex items-center">
          <Star size={16} color="#FDE047" className="bg" fill="#FDE047" />
          <div className="text-small font-medium">{voteSimplifier}</div>
          <div className="text-[#71717A]">/10</div>
        </div>
        <div className="text-xs ">{overview}</div>
      </div>
    </div>
  );
};
