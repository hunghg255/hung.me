'use client';

/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import ActiveLink from 'src/components/UI/ActiveLink/ActiveLink';
import ButtonBurger from 'src/components/UI/ButtonBurger';
import CheckboxIos from 'src/components/UI/CheckboxIos';
import Logo from 'src/components/UI/IconSvg/logo';
import Sparkles from 'src/components/UI/Sparkles/Sparkles';

import styles from './index.module.scss';

interface IProps {
  handleToggleDarkTheme: (e: any) => void;
  toggle: boolean;
}

function SideDraw(props: IProps) {
  const { toggle, handleToggleDarkTheme } = props;
  const router = useRouter();
  const pathname = usePathname();

  const [isToggle, setIsToggle] = useState(false);

  const handleToggleNav = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    setIsToggle(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight > 600) {
        setIsToggle(false);
      }
    });
  }, []);

  return (
    <>
      <nav className={`${styles.navSideDraw} ${isToggle ? styles.navSideDrawActive : ''}`}>
        <div className='container'>
          <ul className={styles.navSideDrawList}>
            <li
              className={`${styles.navSideDrawItem} ${styles.navSideDrawLogo}`}
              onClick={() => router.push('/')}
            >
              {/* <Image
                src={
                  toggle ? '/images/logo-dark-theme.png' : '/images/logo.png'
                }
                alt='Logo'
                width={100}
                height={32}
              /> */}
              <Sparkles>
                <Logo />
              </Sparkles>
            </li>
            <li className={styles.navSideDrawItem}>
              <ButtonBurger isToggle={isToggle} toggle={handleToggleNav} />
            </li>
          </ul>
        </div>
      </nav>
      <div className={`${styles.navSide} ${isToggle ? styles.navSideActive : ''}`}>
        <ul className='Nav__side--list'>
          <li className={styles.navSideItem}>
            <ActiveLink activeClassName='activeLink' href={'/projects'} aria-label='Projects'>
              Projects
            </ActiveLink>
          </li>
          <li className={styles.navSideItem}>
            <ActiveLink activeClassName='activeLink' href={'/blogs'} aria-label='Blog'>
              Blogs
            </ActiveLink>
          </li>
          <li className={styles.navSideItem}>
            <a
              href='https://hunghg-resume.vercel.app/resume.pdf'
              target='_blank'
              rel='noreferrer'
              aria-label='Resume'
            >
              Resume
            </a>
          </li>
          <li className={styles.navSideItem}>
            <a
              href='https://github.com/hunghg255'
              target='_blank'
              rel='noreferrer'
              aria-label='Github'
            >
              Github
            </a>
          </li>
          <li className={styles.navSideItem}>
            <a
              href='https://twitter.com/hunghg255'
              target='_blank'
              rel='noreferrer'
              aria-label='Github'
            >
              Twitter
            </a>
          </li>

          <li className={styles.navSideItem}>
            <Link href='/sitemap-0.xml' aria-label='RSS'>
              RSS
            </Link>
          </li>
        </ul>
        <div className={styles.btnToggle}>
          <CheckboxIos id={1} isChecked={toggle} handleToggle={handleToggleDarkTheme} />
        </div>
      </div>
    </>
  );
}

export default React.memo(SideDraw);
