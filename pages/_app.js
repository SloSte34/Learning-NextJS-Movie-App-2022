import NavBar from '../components/NavBar';

export default function CustomMyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
