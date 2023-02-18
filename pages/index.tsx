import dynamic from 'next/dynamic';
import { getPlaiceholder } from 'plaiceholder';
import Header from 'src/components/Section/Header';

const About = dynamic(() => import('src/components/Section/About'));
const Contact = dynamic(() => import('src/components/Section/Contact'));
const Footer = dynamic(() => import('src/components/Section/Footer'));
const Portfolio = dynamic(() => import('src/components/Section/Portfolio'));

function Home({ images }: any) {
  return (
    <>
      <Header />
      <About />
      <Portfolio portfolioImg={images} />
      <Contact />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const imagePaths = [
    '/images/projects/warehouse.png',
    '/images/projects/todoMERN.png',
    '/images/projects/authFirebase.png',
    '/images/projects/movies.png',
    '/images/projects/fbclone.png',
    '/images/projects/codepenclone.png',
    '/images/projects/weatherApp.png',
    '/images/projects/madies.png',
    '/images/projects/shuffleImage.png',
  ];

  const plaiceholders = await Promise.all(
    imagePaths.map((src) => {
      return getPlaiceholder(src);
    }),
  );

  return {
    props: {
      images: plaiceholders,
    },
  };
};

export default Home;
