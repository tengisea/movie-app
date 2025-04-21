import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  env:{
    TMDB_KEY : process.env.TMDB_KEY,
    TMDB_TOKEN : process.env.TMDB_TOKEN,
    TMDB_BASE_URL : process.env.TMDB_BASE_URL,
  }
};

export default nextConfig;
