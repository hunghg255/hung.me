'use client';

import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import ActiveLink from 'src/components/UI/ActiveLink/ActiveLink';
import { Icon } from 'src/components/UI/Icon/Icon';
import { getCookie } from 'cookies-next';
import { toggleDark } from 'src/utils';
import { motion } from 'framer-motion';

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
  useEffect(() => {
    if (document) {
      const nav: any = document.querySelector('.nav'),
        nav_inner = nav.querySelector('.nav-inner');

      nav_inner.querySelectorAll('li').forEach((li, idx) => {
        li.addEventListener('mouseleave', () => nav.style.setProperty('--enter-nav', 0));
        li.addEventListener('mousemove', (e) => {
          let { clientX: x, clientY: y } = e;
          const rect = li.getBoundingClientRect();
          x = (x - rect.x - rect.width / 2) / rect.width;
          y = (y - rect.y - rect.height / 2) / rect.height;

          nav.style = `
            --enter-nav: 1;
            --current-item: ${idx};
            --x: ${x};
            --y: ${y};
        `;
        });
      });
    }
  }, []);

  return (
    <div className={styles.containerBottomNavigation}>
      <nav className='nav'>
        <ul className='binoculars'>
          <li>Home</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Work</li>
          <li>Github</li>
          <li>Theme</li>
        </ul>
        <ul className='nav-inner'>
          <li className={styles.navItem}>
            <ActiveLink href='/' aria-label='Home' activeClassName={styles.active}>
              <Icon icon='icon-home' />
            </ActiveLink>
          </li>
          <li className={styles.navItem}>
            <ActiveLink href='/projects' aria-label='Projects' activeClassName={styles.active}>
              <Icon icon='icon-pointer' />
            </ActiveLink>
          </li>

          <li className={styles.navItem}>
            <ActiveLink href='/blogs' aria-label='Blog' activeClassName={styles.active}>
              <Icon icon='icon-glasses' />
            </ActiveLink>
          </li>

          <li className={styles.navItem}>
            <ActiveLink href='/work/1' aria-label='Work' activeClassName={styles.active}>
              <Icon icon='icon-task' />
            </ActiveLink>
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
          </li>

          <li className={styles.navItem}>
            <ButtonToggleTheme />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;
