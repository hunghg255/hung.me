'use client';

import React, { useEffect, useState } from 'react';

import { getCookie } from 'cookies-next';

import { toggleDark } from 'src/utils';

import Navbar from '../Navigation/Navbar';
import SideDraw from '../Navigation/SideDraw';

const handleToggle = (e: any) => {
  toggleDark(e.nativeEvent);
};

const HeaderContainer = () => {
  const [isToggle, setIsToggle] = useState<boolean>(getCookie('data-theme') === 'dark');

  useEffect(() => {
    const localTheme = getCookie('data-theme') === 'dark';
    if (localTheme) {
      document.documentElement.dataset.theme = 'dark';
      setIsToggle(true);
    }
  }, []);

  return (
    <header className={'Wrapper'}>
      <Navbar handleToggleDarkTheme={handleToggle} toggle={isToggle} />
      <SideDraw handleToggleDarkTheme={handleToggle} toggle={isToggle} />
    </header>
  );
};

export default HeaderContainer;
