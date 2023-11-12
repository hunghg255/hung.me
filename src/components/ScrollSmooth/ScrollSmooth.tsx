'use client';

import { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';

const ScrollSmooth = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: any) {
      if (!time) {
        return;
      }
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(raf as any);
    };
  }, []);

  return <></>;
};

export default ScrollSmooth;
