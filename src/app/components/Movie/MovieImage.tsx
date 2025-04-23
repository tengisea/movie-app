type MovieImageType = {
  posterPath: string;
  imageWidth?: string;
};

export const MovieImage = ({
  posterPath,
  imageWidth = "w300",
}: MovieImageType) => {
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/${imageWidth}${posterPath}`;
  return (
    <div className="relative overflow-hidden">
      <img src={imageUrl} alt="" className="object-cover" />
      <div className="inset-0 z-10 transition-all duration-300 group-hover:bg-primary/30">
      </div>
    </div>
  );
};
