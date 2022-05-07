import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href='/'>
        <a className={router.pathname === '/' ? 'active' : ''}>
          Go To Home Page
        </a>
        {/* <a
          className={`${styles.link} ${
            router.pathname === '/' ? styles.active : ''
          }`}
        >
          Go To Home Page
        </a> */}
      </Link>
      <Link href='/about'>
        <a className={router.pathname === '/about' ? 'active' : ''}>
          Go To About Page
        </a>
        {/* <a
          className={`${styles.link} ${
            router.pathname === '/about' ? styles.active : ''
          }`}
        >
          Go To About Page
        </a> */}
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: white;
        }
      `}</style>

      {/* don't use a tag */}
      {/* <a href='/'>Go To Home Page</a> */}
      {/* <a href='/about'>Go To About Page</a> */}
    </nav>
  );
}
