import { Footer, Header } from "@/components";
import { ReactNode, Suspense } from "react";

type GenreLayoutType = {
  children: Readonly<ReactNode>;
  genres: Readonly<React.ReactNode>;
  movies: Readonly<React.ReactNode>;
};
const Genrelayout = ({ children, genres, movies }: GenreLayoutType) => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="flex flex-col gap-8 px-5 md:px-25">
        <div className="text-3xl font-semibold">Search filter</div>
        <div className="md:flex">
          <div>
            <Suspense fallback={<div>Loading</div>}>{genres}</Suspense>
          </div>
          <Suspense fallback={<div>Movie loading</div>}>{movies}</Suspense>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Genrelayout;
