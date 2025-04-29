"use client";
import { ChevronRight, X } from "lucide-react";
import { useFetchDataInClient } from "@/hooks/useFetchDataClient";
import { GenresLoading } from "./GenresLoading";
import { Badge } from "@/components/ui/badge";
import { useURLSearchParams } from "@/hooks/useURLSearchParams";
import { useRouter } from "next/navigation";

type Genre = {
  id: number;
  name: string;
};

export const AllMovieGenres = () => {
  const { push } = useRouter();
  const { selectedGenresIds, generateQueryParams } = useURLSearchParams();
  const { data, isLoading } = useFetchDataInClient(
    process.env.TMDB_MOVIE_GENRE
  );

  if (isLoading) return <GenresLoading />;

  const genres = data?.genres ?? [];

  const handleGenreSelection = (genreId: string) => () => {
    const newPath = generateQueryParams(genreId);
    push(newPath);
  };

  return (
    <div className="flex flex-wrap items-start content-start self-stretch gap-4 pt-3">
      {genres.map(({ id, name }, index) => {
        const genreId = id.toString();
        const isSelected = selectedGenresIds.includes(genreId);
        return (
          <Badge
            variant={"outline"}
            key={index}
            onClick={handleGenreSelection(genreId)}
            className="px-1.5 font-bold border-1 border-solid border-[#E4E4E7] dark:border-[#27272A] rounded-full ">
            {name}
            {isSelected ? (
              <X size={16} className="ml-2" />
            ) : (
              <ChevronRight size={16} className="ml-2" />
            )}
          </Badge>
        );
      })}
    </div>
  );
};
