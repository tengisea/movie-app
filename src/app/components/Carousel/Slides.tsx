type MovieImageType = {
  backdrop_path: string;
  imageWidth?: string;
};

export const Slides = ({
  backdrop_path,
  imageWidth = "original",
}: MovieImageType) => {
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/${imageWidth}${backdrop_path}`;
  return (
    <div className="">
      <img src={imageUrl} alt="" className="object-cover w-full " />
    </div>
  );
};
