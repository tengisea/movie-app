import { ChevronRight } from "lucide-react";
import { MouseEvent } from "react";

type SeeMoreProps = {
  id: number;
  handle: (_id: number) => () => void;
};

export const SeeMore = ({ handle, id }: SeeMoreProps) => {
  return (
    <button className="flex gap-2"
    //  onClick={ handle(id) }
     >
      See more <ChevronRight />
    </button>
  );
};
