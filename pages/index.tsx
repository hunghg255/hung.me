import dynamic from 'next/dynamic';

import Header from 'src/components/Section/Header';

const About = dynamic(() => import('src/components/Section/About'));
const Contact = dynamic(() => import('src/components/Section/Contact'));
const Footer = dynamic(() => import('src/components/Section/Footer'));
const Portfolio = dynamic(() => import('src/components/Section/Portfolio'));

function Home() {
  return (
    <>
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
