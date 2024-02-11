'use client';

import React, { useEffect, useState } from 'react';

import { toggleDark } from 'src/utils';

import Navbar from '../Navigation/Navbar';
// import SideDraw from '../Navigation/SideDraw';

const handleToggle = (e: any) => {
  toggleDark(e.nativeEvent);
};

const HeaderContainer = () => {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  useEffect(() => {
    const localTheme = localStorage.getItem('data-theme') === 'dark';
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
      {/* <SideDraw handleToggleDarkTheme={handleToggle} toggle={isToggle} /> */}
    </header>
  );
};

export default HeaderContainer;
