import Lenis from '@studio-freight/lenis';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';
import Layout from 'src/components/Layout';
import '../styles/globals.scss';

const Cursor = dynamic(() => import('src/components/UI/Cursor/Cursor'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: any) {
      if (!time) return;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(raf as any);
    };
  }, []);

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
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Cursor />
    </>
  );
}

export default MyApp;
