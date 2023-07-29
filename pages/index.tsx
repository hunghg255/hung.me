import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from 'src/components/Section/Header';

const About = dynamic(() => import('src/components/Section/About'));
const Contact = dynamic(() => import('src/components/Section/Contact'));
const Footer = dynamic(() => import('src/components/Section/Footer'));
const Portfolio = dynamic(() => import('src/components/Section/Portfolio'));

function Home() {
  return (
    <>
      <Head>
        <link rel='canonical' href='https://hung.thedev.id/'></link>
        <meta property='og:url' content='https://hung.thedev.id/' />
      </Head>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default Home;
