import { axiosInstance } from "@/lib/axios-instance";
import { Footer, Header, Popular, TopRated, Upcoming } from "./components";

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data.results;
};
const getUpcomingMovies = async () => {
  const { data } = await axiosInstance("/movie/upcoming?language=en-US&page=1");
  return data.results as MovieDetail[];
};
const getTopRatedMovies = async () => {
  const { data } = await axiosInstance("/movie/top_rated?language=en-US&page=1");
  return data.results as MovieDetail[];
};

const Home = async () => {
  const popular = await getPopularMovies();
  const upcoming = await getUpcomingMovies();
  const topRated = await getTopRatedMovies()

  return (
    <div className="flex flex-col gap-13">
      <Header />
      <Upcoming upcoming={upcoming} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
      <Footer/>
    </div>
  );
};

export default Home;
