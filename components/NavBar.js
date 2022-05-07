import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <h2>Movie App Using NextJS</h2>
      <h4>What is popular movies these days?</h4>
      <div>
        <Link href='/'>
          <a className={router.pathname === '/' ? 'active' : ''}>Home Page</a>
        </Link>
        <Link href='/about'>
          <a className={router.pathname === '/about' ? 'active' : ''}>
            About Page
          </a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 25px;
          padding-bottom: 25px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          border-radius: 10px;
        }
        h2 {
          color: red;
        }
        nav a {
          font-weight: 600;
          font-size: 20px;
        }
        .active {
          color: green;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
