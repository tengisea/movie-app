type MovieImageType = {
  posterPath: string;
  imageWidth?: string;
};

export const MovieImage = ({
  posterPath,
  imageWidth = "original",
}: MovieImageType) => {
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/${imageWidth}${posterPath}`;
  return (
    <div className="position overflow-hidden hover:opacity-30 rounded-t-lg">
      <img
        src={imageUrl}
        alt=""
        className="object-cover  hidden md:block"
        width={340}
        height={230}
      />
      <img
        src={imageUrl}
        alt=""
        className="object-cover  md:hidden"
        width={157}
        height={233}
      />
    </div>
  );
};
