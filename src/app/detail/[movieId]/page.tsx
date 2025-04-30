import { axiosInstance } from "@/lib/axios-instance";
import { Footer, Header } from "@/components";
import { MoreLikeThis, MovieDetail } from "./components";

type DetailPageParams = {
  params: {
    movieId: string;
  };
};
type MovieDetailProps = {
  id: number;
};

const getDetailMovie = async (movieId: string) => {
  const { data } = await axiosInstance(`/movie/${movieId}?language=en-US`);
  return data as MovieDetailProps[];
};

const getCastMovie = async (movieId: string) => {
  const { data } = await axiosInstance(
    `/movie/${movieId}/credits?language=en-US`
  );
  return data as MovieDetailProps[];
};

const getMoreMovies = async (movieId: string)=> {
  const { data } = await axiosInstance(
    `/movie/${movieId}/similar?language=en-US&page=1`
  );
  return data.results as MovieDetailProps
}

const DetailPage = async ({ params: { movieId } }: DetailPageParams) => {
  const detail = await getDetailMovie(movieId);
  const cast = await getCastMovie(movieId);
  const moreMovies = await getMoreMovies(movieId)
 console.log(moreMovies);
 

  return (
    <div className="flex flex-col gap-15">
      <Header />
      <MovieDetail detail={detail} cast={cast} />
      <MoreLikeThis moreMovies={moreMovies} />
      <Footer/>
    </div>
  );
};
export const dynamic = "force-dynamic";
export default DetailPage;
