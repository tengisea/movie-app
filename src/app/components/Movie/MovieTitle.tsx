import { Star } from "lucide-react";

type MovieTitleType = {
  originalTitle: string;
  voteAverage: number;
};

export const MovieTitle = ({ originalTitle, voteAverage }: MovieTitleType) => {
  const title = `${originalTitle}`;
  const vote = Number(`${voteAverage}`);
  const voteSimplifier = Math.round(Number(vote * 10)) / 10;

  return (
    <div>
      <div className="flex items-center">
        <Star size={16} color="#FDE047" className="bg" fill="#FDE047" />
        <div className="text-small font-medium">{voteSimplifier}</div>
        <div className="text-[#71717A] text-xs">/10</div>
      </div>
      <div className="text-lg">{title}</div>
    </div>
  );
};
