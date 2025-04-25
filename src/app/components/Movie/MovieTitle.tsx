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
    <div className="p-2 bg-[#F4F4F5] dark:bg-[#27272A]">
      <div className="flex items-center">
        <Star size={16} color="#FDE047" className="bg" fill="#FDE047" />
        <div className="text-small font-medium">{voteSimplifier}</div>
        <div className="text-[#71717A]">/10</div>
      </div>
      <div className="text-lg overflow-ellipsis line-clamp-2 break-all w-[141px] lg:w-[243px] h-14">
        {title}
      </div>
    </div>
  );
};
