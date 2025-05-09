import { axiosInstance } from "@/lib/axios-instance";
import { Footer, Header, Popular, TopRated, Upcoming } from "../components";
import { Slide } from "../components/Carousel";

const getPopularMovies = async () => {
  const { data} = await axiosInstance(process.env.TMDB_POPULAR);
  return data.results;
};
const getUpcomingMovies = async () => {
  const { data } = await axiosInstance(process.env.TMDB_UPCOMING);
  return data.results as MovieDetail[];
};
const getTopRatedMovies = async () => {
  const { data } = await axiosInstance(
    process.env.TMDB_TOP_RATED
  );return data.results as MovieDetail[];
};

const Home = async () => {
  const popular = await getPopularMovies();
  const upcoming = await getUpcomingMovies();
  const topRated = await getTopRatedMovies();

  return (
    <div className="flex flex-col gap-13">
      <Header />
      <Slide />
      <Upcoming upcoming={upcoming} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
      <Footer />
    </div>
  );
};

export default Home;
