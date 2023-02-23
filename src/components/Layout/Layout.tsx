import { getCookie, setCookie } from 'cookies-next';
import React, { useState } from 'react';
import ButtonScrollTop from '../ButtonScrollTop';
import Navbar from '../Navigation/Navbar';
import SideDraw from '../Navigation/SideDraw';

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  const [isToggle, setIsToggle] = useState<boolean>(getCookie('data-theme') === 'dark');

  const handleToggle = () => {
    if (isToggle === false) {
      localStorage?.setItem('data-theme', 'dark');
      setCookie('data-theme', 'dark', {
        maxAge: 2147483647,
      });
      document.documentElement.setAttribute('data-theme', 'dark');

      setIsToggle(true);
    } else {
      setCookie('data-theme', 'light', {
        maxAge: 2147483647,
      });
      document.documentElement.removeAttribute('data-theme');
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
