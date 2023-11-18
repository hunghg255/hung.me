'use client';

import React, { useEffect, useState } from 'react';

import { getCookie } from 'cookies-next';

import { toggleDark } from 'src/utils';

import Navbar from '../Navigation/Navbar';
import SideDraw from '../Navigation/SideDraw';

const handleToggle = (e: any) => {
  toggleDark(e.nativeEvent);
};

const HeaderContainer = ({ dataTheme }: { dataTheme: 'dark' | 'light' }) => {
  const [isToggle, setIsToggle] = useState<boolean>(dataTheme as any);

  useEffect(() => {
    const localTheme = getCookie('data-theme') === 'dark';
    if (localTheme) {
      document.documentElement.dataset.theme = 'dark';
      setIsToggle(true);
    } else {
      document.documentElement.dataset.theme = 'light';
      setIsToggle(false);
    }
  }, []);

  return (
    <header className={'Wrapper'} id='header'>
      <Navbar handleToggleDarkTheme={handleToggle} toggle={isToggle} />
      <SideDraw handleToggleDarkTheme={handleToggle} toggle={isToggle} />
    </header>
  );
};

export default HeaderContainer;
