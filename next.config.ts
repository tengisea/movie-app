import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMDB_KEY: process.env.TMDB_KEY,
    TMDB_TOKEN: process.env.TMDB_TOKEN,
    TMDB_BASE_URL: process.env.TMDB_BASE_URL,
    TMDB_UPCOMING: process.env.TMDB_UPCOMING,
    TMDB_IMAGE_SERVICE_URL: process.env.TMDB_IMAGE_SERVICE_URL,
    TMDB_POPULAR: process.env.TMDB_POPULAR,
    TMDB_TOP_RATED: process.env.TMDB_TOP_RATED,
    TMDB_MOVIE_DETAIL: process.env.TMDB_MOVIE_DETAIL,
    TMDB_MOVIE_GENRE: process.env.TMDB_MOVIE_GENRE
  },
};
// module.exports = {
//   images: {
//     remotePatterns: [new URL("https://image.tmdb.org/t/p")],
//   },
// };

export default nextConfig;
