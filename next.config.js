/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-blog/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
