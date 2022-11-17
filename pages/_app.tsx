import Lenis from '@studio-freight/lenis';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageview } from 'src/utils/gtm';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Hunghg | Front-end Developer</title>

        <meta property='og:type' content='website' />

        <link
          rel='icon'
          href='https://res.cloudinary.com/hunghg255/image/upload/v1654956188/favicon_gplhkh.png'
        />

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
