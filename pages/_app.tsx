/* eslint-disable react/no-unknown-property */
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Layout from 'src/components/Layout';
import { fontGeist } from 'src/components/UI/font/font';
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
const Plum = dynamic(() => import('src/components/Plum/Plum'), {
  ssr: false,
});
const Progressbar = dynamic(() => import('src/components/Progessbar/Progessbar'), {
  ssr: false,
});
const LogArt = dynamic(() => import('src/components/LogArt/LogArt'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Hunghg | Front-end Developer</title>
        <meta property='og:site_name' content='Hunghg | Front-end Developer' />
        <meta property='og:type' content='website' />

        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='title' content='Hunghg | Front-end Developer' />
        <meta
          name='description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta property='og:locale' content='vi_VN' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://hung.thedev.id/' />
        <meta property='og:title' content='Hunghg | Front-end Developer' />
        <meta
          property='og:description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta
          property='og:image'
          content='https://cdn.jsdelivr.net/gh/hunghg255/static/og-img.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://hung.thedev.id/' />
        <meta property='twitter:title' content='Hunghg | Front-end Developer' />
        <meta
          property='twitter:description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta
          property='twitter:image'
          content='https://cdn.jsdelivr.net/gh/hunghg255/static/og-img.png'
        />

        <meta property='og:image:type' content='image/jpeg' />
        <meta name='robots' content='index, follow' />
        <meta
          name='googlebot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta
          name='bingbot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />

        <meta
          name='google-site-verification'
          content='fQuFJdHbSiH8czBosKz0oVZDXIDJRCEHcYIrzOoMNn4'
        />
      </Head>

      <style jsx global>{`
        :root {
          --fontGeist: ${fontGeist.style.fontFamily};
        }
      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Cursor />
      <ScrollSmooth />
      <AosComponent />
      <Plum />
      <Progressbar />
      <LogArt />
    </>
  );
}

export default MyApp;
