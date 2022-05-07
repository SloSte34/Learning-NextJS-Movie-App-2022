import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div className='detailContainer'>
      <img
        alt='movie poster image'
        src={`https://image.tmdb.org/t/p/w500/${router.query.poster}`}
      />
      <h2>{router.query.title || 'Loading Movie Information...'}</h2>
      <p>{router.query.overview}</p>

      <style jsx>
        {`
          .detailContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .detailContainer img {
            border-radius: 15px;
            margin-top: 30px;
            width: 70%;
          }
        `}
      </style>
    </div>
  );
}
