import { useEffect } from 'react';

import dynamic from 'next/dynamic';

import Header from 'src/components/Section/Header';

const About = dynamic(() => import('src/components/Section/About'));
const Contact = dynamic(() => import('src/components/Section/Contact'));
const Footer = dynamic(() => import('src/components/Section/Footer'));
const Portfolio = dynamic(() => import('src/components/Section/Portfolio'));

function Home() {
  useEffect(() => {
    fetch(
      'https://foundation.miraeasset.com.vn/api/header?populate=deep&locale=en&fbclid=IwAR3jTHEl0En6LiLzJefH4LLTh4sndrIY-hvvg3kFUXWqhL09kvjHJuxtpiY',
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

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
