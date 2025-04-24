"use client";
import {ChevronRight, X } from "lucide-react";
import { useFetchDataInClient } from "@/hooks/useFetchDataClient";
import { GenresLoading } from "./GenresLoading";
import { Badge } from "@/components/ui/badge";

type Genre = {
  id: number;
  name: string;
};

export const AllMovieGenres = () => {
  const { data, isLoading } = useFetchDataInClient(
    "/genre/movie/list?language=en"
  );
  const genres = data?.genres ?? [];
  if (isLoading) {return <GenresLoading />}

  return (
    <div className="flex flex-wrap items-start content-start self-stretch gap-4 pt-3">
      {genres.map(({ id, name }) => {
        return (
          <Badge
          variant={"outline"}
            key={id}
            className="px-1.5 font-bold border-1 border-solid border-[#E4E4E7] rounded-full ">
            {name}
            <ChevronRight size={16} color="#000000" className="ml-2" />
          </Badge>
        );
      })}
    </div>
  );
};
