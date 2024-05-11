'use client';

import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import ActiveLink from 'src/components/UI/ActiveLink/ActiveLink';
import Link from 'next/link';
import { Icon } from 'src/components/UI/Icon/Icon';
import { getCookie } from 'cookies-next';
import { toggleDark } from 'src/utils';

const ButtonToggleTheme = () => {
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
    setIsToggle(!isToggle);
  };

  return (
    <button className={styles.buttonToggleTheme} aria-label='Toggle theme' onClick={handleToggle}>
      <Icon icon={!isToggle ? 'icon-sun' : 'icon-moon'} />
    </button>
  );
};

const BottomNavigation = () => {
  return (
    <div className={styles.containerBottomNavigation}>
      <ul>
        <li className={styles.navItem}>
          <ActiveLink href='/' aria-label='Home' activeClassName={styles.active}>
            <Icon icon='icon-home' />
          </ActiveLink>
          <span>Home</span>
        </li>
        <li className={styles.navItem}>
          <ActiveLink href='/projects' aria-label='Projects' activeClassName={styles.active}>
            <Icon icon='icon-pointer' />
          </ActiveLink>
          <span>Projects</span>
        </li>

        <li className={styles.navItem}>
          <ActiveLink href='/blog' aria-label='Blog' activeClassName={styles.active}>
            <Icon icon='icon-glasses' />
          </ActiveLink>
          <span>Blog</span>
        </li>

        <li className={styles.navItem}>
          <a
            href='https://github.com/hunghg255'
            target='_blank'
            rel='noreferrer'
            aria-label='Github'
          >
            <Icon icon='icon-github' />
          </a>
          <span>Github</span>
        </li>
        <li className={styles.navItem}>
          <a
            href='https://twitter.com/hunghg255'
            target='_blank'
            rel='noreferrer'
            aria-label='Twitter'
          >
            <Icon icon='icon-x' />
          </a>
          <span>X</span>
        </li>

        <li className={styles.navItem}>
          <ButtonToggleTheme />
          <span>Toggle Theme</span>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavigation;
