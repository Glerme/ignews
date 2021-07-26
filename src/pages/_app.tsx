import { NextPage } from 'next';
import Head from 'next/head';

import { Provider as NextAuthProvider } from 'next-auth/client';

import { AppProps } from 'next/dist/next-server/lib/router/router';

import { Header } from '../components/Header';

import GlobalStyles from '../styles/global';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Head>
        <title>Ig.News</title>
      </Head>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
};

export default MyApp;
