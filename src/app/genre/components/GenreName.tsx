import { axiosInstance } from "@/lib/axios-instance";

type GenreIdsProps = {
  genreIds: string[];
};

type Genre = {
  id: number;
  name: string;
};

const getGenreName = async (): Promise<Genre[]> => {
  const { data } = await axiosInstance(process.env.TMDB_MOVIE_GENRE);
  return data.genres;
};

export const GenreName = async ({ genreIds }: GenreIdsProps) => {
  const genreName = await getGenreName();

  return (
    <div className="flex flex-wrap">
      titles in &quot;
      {genreName
        .filter((genre) => genreIds.includes(genre.id.toString()))
        .map((genre, index, filteredArray) => (
          <div key={genre.id}>
            {genre.name}
            {index < filteredArray.length - 1 ? ", " : ""}
          </div>
        ))}
      &quot;
    </div>
  );
};
