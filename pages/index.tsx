import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';
import ButtonScrollTop from 'src/components/ButtonScrollTop';
import Layout from 'src/components/Layout';

const Navbar = dynamic(() => import('src/components/Navigation/Navbar'));
const SideDraw = dynamic(() => import('src/components/Navigation/SideDraw'));
const About = dynamic(() => import('src/components/Section/About'));
const Contact = dynamic(() => import('src/components/Section/Contact'));
const Footer = dynamic(() => import('src/components/Section/Footer'));
const Header = dynamic(() => import('src/components/Section/Header'));
const Portfolio = dynamic(() => import('src/components/Section/Portfolio'));

function Home() {
  const RefHeader = useRef<HTMLElement>(null);
  const RefAbout = useRef<HTMLElement>(null);
  const RefPortfolio = useRef<HTMLElement>(null);
  const RefContact = useRef<HTMLElement>(null);

  const [isToggle, setIsToggle] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage?.getItem('data-theme') === 'dark';
    }
  });

  const handleToggle = () => {
    if (isToggle === false) {
      localStorage?.setItem('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsToggle(true);
    } else {
      localStorage?.setItem('data-theme', 'light');
      document.documentElement.removeAttribute('data-theme');
      setIsToggle(false);
    }
  };

  React.useEffect(() => {
    const localTheme = localStorage?.getItem('data-theme') === 'dark';
    if (localTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      // setIsToggle(true);
    }
  }, []);

  return (
    <Layout>
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

export default Home;
