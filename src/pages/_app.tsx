import 'tailwindcss/tailwind.css';
// import '../assets/styles/tailwind.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eiffel Tailwind</title>
        <link rel='icon' href='/tailwind-logo.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
