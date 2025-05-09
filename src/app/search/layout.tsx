import { Footer, Header } from "@/components";
import { ReactNode, Suspense } from "react";

type SearchlayoutType = {
  children: Readonly<ReactNode>;
  genres: Readonly<React.ReactNode>;
  movies: Readonly<React.ReactNode>;
};
const Searchlayout = ({ children, genres, movies }: SearchlayoutType) => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="flex flex-col gap-8 px-5 md:px-25">
        <div className="text-3xl font-semibold">Search results</div>
        <div className="md:flex gap-7">
          <div>
            <Suspense
              fallback={
                <div className="flex justify-center animate-spin size-6 border-3 border-current border-t-transparent text-gray-800 rounded-full dark:text-white"></div>
              }>
              {movies}
            </Suspense>
          </div>
          <Suspense
            fallback={
              <div className="flex justify-center animate-spin size-6 border-3 border-current border-t-transparent text-gray-800 rounded-full dark:text-white"></div>
            }>
            {genres}
          </Suspense>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Searchlayout;
