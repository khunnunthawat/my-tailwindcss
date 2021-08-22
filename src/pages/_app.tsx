import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
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
