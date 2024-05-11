'use client';

/* eslint-disable multiline-ternary */
import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ActiveLink from 'src/components/UI/ActiveLink/ActiveLink';
import CheckboxIos from 'src/components/UI/CheckboxIos';
import Logo from 'src/components/UI/IconSvg/logo';

import styles from './index.module.scss';

interface IProps {
  handleToggleDarkTheme: (e: any) => void;
  toggle: boolean;
}

function Navbar(props: IProps) {
  const { handleToggleDarkTheme, toggle } = props;
  const router = useRouter();

  return (
    <nav className={styles.navBar}>
      <div className='container'>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${styles.navItemLogo}`}
            onClick={() => router.push('/')}
          >
            <Logo />
          </li>

          {/* <li className={styles.navItem}>
            <CheckboxIos id={2} isChecked={toggle} handleToggle={handleToggleDarkTheme} />
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
