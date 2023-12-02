'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Header from 'src/components/Section/Header';
// import 'aos/dist/aos.css';

const About = dynamic(() => import('src/components/Section/About'));
const Contact = dynamic(() => import('src/components/Section/Contact'));
const Footer = dynamic(() => import('src/components/Section/Footer'));
const Portfolio = dynamic(() => import('src/components/Section/Portfolio'));

const HomePage = () => {
  return (
    <>
      {/* <Head>
        <link rel='canonical' href='https://hung.thedev.id/'></link>
        <meta property='og:url' content='https://hung.thedev.id/' />
      </Head> */}
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
