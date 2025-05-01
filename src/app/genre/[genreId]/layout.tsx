import { ReactNode, Suspense } from "react";

type GenreLayoutType = {
  children: Readonly<ReactNode>;
  genres: Readonly<React.ReactNode>;
  movies: Readonly<React.ReactNode>;
};
const layout = () => {
  return <div>layout</div>;
};

export default layout;
