
import { axiosInstance } from "@/lib/axios-instance";
type DetailPageParams = {
  params: {
    movieId: string;
  };
};

const DetailPage = ({ params: { movieId } }: DetailPageParams) => {
    return <div>{movieId} </div>;
  };

export default DetailPage;
