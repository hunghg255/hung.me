import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

const AosComponent = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      AOS.init({
        once: true,
      });
    }, 150);

    return () => {
      clearTimeout(t);
    };
  }, []);

  return null;
};

export default AosComponent;
