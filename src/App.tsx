import React, { useRef, useState } from 'react';

import Layout from './components/Layout/Layout';
import Header from './components/Section/Header/Header';
import About from './components/Section/About/About';
import Portfolio from './components/Section/Portfolio/Portfolio';
import Contact from './components/Section/Contact/Contact';

import Navbar from './components/Navigation/Navbar/Navbar';
import SideDraw from './components/Navigation/SideDraw/SideDraw';

import Seo from './components/SEO/Seo';
import ButtonScrollTop from './components/ButtonScrollTop/ButtonScrollTop';
import Footer from './components/Section/Footer/Footer';

function App() {
  const RefHeader = useRef<HTMLElement>(null);
  const RefAbout = useRef<HTMLElement>(null);
  const RefPortfolio = useRef<HTMLElement>(null);
  const RefContact = useRef<HTMLElement>(null);

  const [isToggle, setIsToggle] = useState<boolean>(
    localStorage.getItem('data-theme') === 'dark',
  );

  const handleToggle = () => {
    if (isToggle === false) {
      localStorage.setItem('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsToggle(true);
    } else {
      localStorage.setItem('data-theme', 'light');
      document.documentElement.removeAttribute('data-theme');
      setIsToggle(false);
    }
  };

  React.useEffect(() => {
    const localTheme = localStorage.getItem('data-theme') === 'dark';
    if (localTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <Layout>
      <Seo />
      <Navbar
        refSection={{
          refHeader: RefHeader,
          refAbout: RefAbout,
          refPortfolio: RefPortfolio,
          refContact: RefContact,
        }}
        handleToggleDarkTheme={handleToggle}
        toggle={isToggle}
      />
      <SideDraw
        refSection={{
          refHeader: RefHeader,
          refAbout: RefAbout,
          refPortfolio: RefPortfolio,
          refContact: RefContact,
        }}
        handleToggleDarkTheme={handleToggle}
        toggle={isToggle}
      />
      <main>
        <Header refHeader={RefHeader} refAbout={RefAbout} />
        <About refAbout={RefAbout} />
        <Portfolio refPortfolio={RefPortfolio} />
        <Contact refContact={RefContact} toggle={isToggle} />
        <Footer toggle={isToggle} />
      </main>

      <ButtonScrollTop refHeader={RefHeader} />
    </Layout>
  );
}

export default App;
