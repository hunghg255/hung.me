import React from 'react';

import Header from 'src/components/Section/Header';
import About from 'src/components/Section/About';
import Portfolio from 'src/components/Section/Portfolio';
import Contact from 'src/components/Section/Contact';
import Footer from 'src/components/Section/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default HomePage;
