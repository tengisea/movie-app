declare namespace NodeJS {
    interface ProcessEnv {
      TMDB_KEY: string;
      TMDB_TOKEN: string;
      TMDB_BASE_URL: string;
      TMDB_UPCOMING: string;
      TMDB_IMAGE_SERVICE_URL: string;
      TMDB_POPULAR: string;
      TMDB_TOP_RATED: string;
      TMDB_MOVIE_DETAIL: string;
      TMDB_MOVIE_GENRE: string;
    }
}