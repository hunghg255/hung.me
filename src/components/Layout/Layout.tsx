import React, { useState } from 'react';
import ButtonScrollTop from '../ButtonScrollTop';
import Navbar from '../Navigation/Navbar';
import SideDraw from '../Navigation/SideDraw';

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  const [isToggle, setIsToggle] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage?.getItem('data-theme') === 'dark';
    }
  });

  const handleToggle = () => {
    if (isToggle === false) {
      localStorage?.setItem('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsToggle(true);
    } else {
      localStorage?.setItem('data-theme', 'light');
      document.documentElement.removeAttribute('data-theme');
      setIsToggle(false);
    }
  };

  React.useEffect(() => {
    const localTheme = localStorage?.getItem('data-theme') === 'dark';
    if (localTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      // setIsToggle(true);
    }
  }, []);

  return (
    <div className='Wrapper' id='header'>
      <Navbar handleToggleDarkTheme={handleToggle} toggle={isToggle} />
      <SideDraw handleToggleDarkTheme={handleToggle} toggle={isToggle} />
      <main>{props.children}</main>

      <ButtonScrollTop />
    </div>
  );
}
