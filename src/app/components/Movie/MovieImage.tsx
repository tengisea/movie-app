type MovieImageType = {
  posterPath: string;
  imageWidth?: string;
};

export const MovieImage = ({
  posterPath,
  imageWidth = "w185",
}: MovieImageType) => {
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/${imageWidth}${posterPath}`;
  return (
    <div className="position overflow-hidden w-full hover:opacity-30 rounded-t-lg">
      <img src={imageUrl} alt="" className="object-cover w-full " />
    </div>
  );
};
