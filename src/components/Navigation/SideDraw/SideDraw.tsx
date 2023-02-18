import React, { useState } from 'react';

import styles from './index.module.scss';

import { onGotoElement } from 'src/utils';
import ButtonBurger from 'src/components/UI/ButtonBurger';
import Image from 'next/image';
import CheckboxIos from 'src/components/UI/CheckboxIos';
import Logo from 'src/components/UI/Icon/logo';
import Sparkles from 'src/components/UI/Sparkles/Sparkles';
import Router, { useRouter } from 'next/router';

interface IProps {
  handleToggleDarkTheme: () => void;
  toggle: boolean;
}

function SideDraw(props: IProps) {
  const { toggle, handleToggleDarkTheme } = props;
  const router = useRouter();

  const [isToggle, setIsToggle] = useState(false);

  const handleToggleNav = () => {
    setIsToggle(!isToggle);
  };

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight > 600) {
        setIsToggle(false);
      }
    });
  }, []);

  const goToElement = (idSection: string) => {
    onGotoElement(idSection);
    setIsToggle(false);
  };

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
          {router.pathname === '/' ? (
            <>
              <li className={styles.navSideItem} onClick={() => goToElement('sectionAbout')}>
                About me
              </li>
              <li className={styles.navSideItem} onClick={() => goToElement('sectionPortfolio')}>
                Portfolio
              </li>
            </>
          ) : (
            <>
              <li className={styles.navSideItem} onClick={() => Router.push('/')}>
                Home
              </li>
            </>
          )}
          <li className={styles.navSideItem} onClick={() => Router.push('/blog')}>
            Blogs
          </li>
          <li className={styles.navSideItem} onClick={() => Router.push('/contact')}>
            Contact
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
