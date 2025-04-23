import { axiosInstance } from "@/lib/axios-instance";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Genre = {
  id: number;
  name: string;
};

const getMoviesGenre = async () => {
  const { data } = await axiosInstance("/genre/movie/list?language=en");

  return data.genres as Genre[];
};
export const GenresDropDown = async () => {
  const genre = await getMoviesGenre();
  
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ChevronDown size={16} color="#000000" />
            <span className="hidden md:block">Genre</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-144.25 p-5">
          <DropdownMenuLabel className="text-2xl font-semibold">
            Genres
          </DropdownMenuLabel>
          <DropdownMenuLabel className="text-base font-normal">
            See lists of movies by genre
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup className="flex flex-wrap items-start content-start self-stretch gap-4 pt-3">
            {genre.map(({ id, name }) => (
              <DropdownMenuRadioItem
                value="top"
                key={id}
                className="px-1.5 font-bold border-1 border-solid border-[#E4E4E7] rounded-full ">
                {name}
                <ChevronRight size={16} color="#000000" />
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
