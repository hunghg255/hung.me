/* eslint-disable react/no-unknown-property */
import dynamic from 'next/dynamic';
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';

import Layout from 'src/components/Layout';

import '../styles/globals.scss';

const Cursor = dynamic(() => import('src/components/UI/Cursor/Cursor'), {
  ssr: false,
});
const ScrollSmooth = dynamic(() => import('src/components/ScrollSmooth/ScrollSmooth'), {
  ssr: false,
});
const AosComponent = dynamic(() => import('src/components/AosComponent/AosComponent'), {
  ssr: false,
});

const OpenSansFont = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Hunghg | Front-end Developer</title>

        <meta property='og:type' content='website' />

        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='title' content='Hunghg | Front-end Developer' />
        <meta
          name='description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://hunghg.vercel.app/' />
        <meta property='og:title' content='Hunghg | Front-end Developer' />
        <meta
          property='og:description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/hunghg255/image/upload/v1654956015/Screen_Shot_2022-06-07_at_11.25.34_bpnymt.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://hunghg.vercel.app/' />
        <meta property='twitter:title' content='Hunghg | Front-end Developer' />
        <meta
          property='twitter:description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/hunghg255/image/upload/v1654956015/Screen_Shot_2022-06-07_at_11.25.34_bpnymt.png'
        />

        <meta property='og:image:type' content='image/jpeg' />
      </Head>

      <style jsx global>{`
        :root {
          --fontOpenSans: ${OpenSansFont.style.fontFamily};
        }
      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Cursor />
      <ScrollSmooth />
      <AosComponent />
    </>
  );
}

export default MyApp;
