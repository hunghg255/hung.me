'use client';

import React, { useEffect, useState } from 'react';

import Router from 'next/router';

import styles from './index.module.scss';

const Progressbar = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleRouteChange = () => {
      setTime(0);
      const t = setTimeout(() => {
        setTime(70);
        clearTimeout(t);
      }, 10);
    };

    const handleRouteComplete = () => {
      setTime(99);
      const t = setTimeout(() => {
        setTime(100);
        clearTimeout(t);
      }, 500);
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    Router.events.on('routeChangeComplete', handleRouteComplete);
    Router.events.on('routeChangeError', handleRouteComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
      Router.events.off('routeChangeComplete', handleRouteComplete);
      Router.events.off('routeChangeError', handleRouteComplete);
    };
  }, []);

  if (time === 100) {
    return <></>;
  }

  return <div className={styles.progressBar} style={{ width: `${time}%` }}></div>;
};

export default Progressbar;
