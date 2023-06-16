import React, { useEffect, useState } from 'react';

import { getCookie, setCookie } from 'cookies-next';

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
    }
  }, []);

  const handleToggle = () => {
    if (isToggle === false) {
      localStorage?.setItem('data-theme', 'dark');
      setCookie('data-theme', 'dark', {
        maxAge: 2_147_483_647,
      });
      document.documentElement.dataset.theme = 'dark';

      setIsToggle(true);
    } else {
      setCookie('data-theme', 'light', {
        maxAge: 2_147_483_647,
      });
      delete document.documentElement.dataset.theme;
      setIsToggle(false);
    }
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
