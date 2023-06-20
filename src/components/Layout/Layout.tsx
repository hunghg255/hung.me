/* eslint-disable unicorn/consistent-function-scoping */
import React, { useEffect, useState } from 'react';

import { getCookie } from 'cookies-next';

import { toggleDark } from 'src/utils';

import ButtonScrollTop from '../ButtonScrollTop';
import Navbar from '../Navigation/Navbar';
import SideDraw from '../Navigation/SideDraw';

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  const [isToggle, setIsToggle] = useState<boolean>(getCookie('data-theme') === 'dark');

  useEffect(() => {
    const localTheme = getCookie('data-theme') === 'dark';
    if (localTheme) {
      document.documentElement.dataset.theme = 'dark';
      setIsToggle(true);
    }
  }, []);

  const handleToggle = (e: any) => {
    toggleDark(e.nativeEvent);
  };

  return (
    <div className='Wrapper' id='header'>
      <Navbar handleToggleDarkTheme={handleToggle} toggle={isToggle} />
      <SideDraw handleToggleDarkTheme={handleToggle} toggle={isToggle} />
      <main>{props.children}</main>

      <ButtonScrollTop />
    </div>
  );
}
