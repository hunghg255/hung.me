import React from 'react';

import styles from './index.module.scss';

import CheckboxIos from 'src/components/UI/CheckboxIos';
import Logo from 'src/components/UI/Icon/logo';
import Sparkles from 'src/components/UI/Sparkles/Sparkles';
import Router, { useRouter } from 'next/router';
import { onGotoElement } from 'src/utils';

interface IProps {
  handleToggleDarkTheme: () => void;
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
            {/* <Image
              src={toggle ? '/images/logo-dark-theme.png' : '/images/logo.png'}
              alt='Logo'
              width={100}
              height={32}
            /> */}
            <Sparkles>
              <Logo />
            </Sparkles>
          </li>
          {router.pathname === '/' ? (
            <>
              <li className={styles.navItem} onClick={() => onGotoElement('sectionAbout')}>
                About me
              </li>
              <li className={styles.navItem} onClick={() => onGotoElement('sectionPortfolio')}>
                Portfolio
              </li>
            </>
          ) : (
            <>
              <li className={styles.navItem} onClick={() => Router.push('/')}>
                Home
              </li>
            </>
          )}

          <li className={styles.navItem} onClick={() => Router.push('/projects')}>
            Projects
          </li>

          <li className={styles.navItem} onClick={() => Router.push('/blog')}>
            Blogs
          </li>

          <li className={styles.navItem} onClick={() => Router.push('/contact')}>
            Contact
          </li>
          <li className={styles.navItem}>
            <CheckboxIos id={2} isChecked={toggle} handleToggle={handleToggleDarkTheme} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
