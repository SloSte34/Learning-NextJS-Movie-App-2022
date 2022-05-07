import AppHead from '../components/AppHead';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const getMovieId = (id, title, overview, poster) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
          overview,
          poster,
        },
      },
      `/movies/${id}`
    );
  };
  return (
    <div className='container'>
      <AppHead title='Home' />

      {results?.map((movie) => (
        <div
          onClick={() =>
            getMovieId(
              movie.id,
              movie.original_title,
              movie.overview,
              movie.poster_path
            )
          }
          className='movie'
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
                overview: movie.overview,
                poster: movie.poster_path,
              },
            }}
            as={`/movies/${movie.id}`}
          >
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
          transition: transform 0.2s ease-in-out;
        }
        .movie h4:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return {
    props: {
      results,
    },
  };
}
