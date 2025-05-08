import { AllMovieGenres } from "@/components/Genre";

const GenresSearch = () => {
  return (
    <div className="flex flex-col gap-8 md:w-97 md:border-l-1 md:px-4">
      <div>
        <div className="font-semibold text-2xl">Search by genres</div>
        <div className="flex flex-col gap-2 md:gap-5">
          <div>See lists of movies by genre</div>
          <AllMovieGenres />
        </div>
      </div>
    </div>
  );
};

export default GenresSearch;
