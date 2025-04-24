import { axiosInstance } from "@/lib/axios-instance";
import { Header, Popular, TopRated, Upcoming } from "./components";

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data;
};

const Home = async () => {
  const popularM = await getPopularMovies();

  return (
    <div>
      <Header />
      <Upcoming />
      <Popular/>
      <TopRated/>
      
    </div>
  );
};

export default Home;
