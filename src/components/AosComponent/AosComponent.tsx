'use client';

import { useEffect } from 'react';

import AOS from 'aos';

const AosComponent = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      AOS.init({
        once: true,
      });
    }, 200);

    return () => {
      clearTimeout(t);
    };
  }, []);

  return <></>;
};

export default AosComponent;
