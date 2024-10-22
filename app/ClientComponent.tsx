'use client';

import React from 'react';

import Noise from 'src/components/Noise/Noise';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import HeaderContainer from 'src/components/HeaderContainer/HeaderContainer';

// const Cursor = dynamic(() => import('src/components/UI/Cursor/Cursor'), {
//   ssr: false,
// });
// const ScrollSmooth = dynamic(() => import('src/components/ScrollSmooth/ScrollSmooth'), {
//   ssr: false,
// });
// const AosComponent = dynamic(() => import('src/components/AosComponent/AosComponent'), {
//   ssr: false,
// });
const Plum = dynamic(() => import('src/components/Plum/Plum'), {
  ssr: false,
});
// const Progressbar = dynamic(() => import('src/components/Progessbar/Progessbar'), {
//   ssr: false,
// });
const LogArt = dynamic(() => import('src/components/LogArt/LogArt'), {
  ssr: false,
});
const ButtonScrollTop = dynamic(() => import('src/components/ButtonScrollTop'), {
  ssr: false,
});
const BottomNavigation = dynamic(() => import('src/components/BottomNavigation/BottomNavigation'), {
  ssr: false,
});

const ClientComponent = ({ children }) => {
  return (
    <>
      <Noise />

      <HeaderContainer />

      <ThemeProvider>{children}</ThemeProvider>

      <BottomNavigation />

      {/* <Cursor /> */}
      <Plum />
      {/* <Progressbar /> */}
      <LogArt />
      {/* <ButtonScrollTop /> */}
    </>
  );
};

export default ClientComponent;
