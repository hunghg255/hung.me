import React, { useState } from 'react';

import styles from './index.module.css';

import { scrollToElement } from 'src/utils';
import ButtonBurger from 'src/components/UI/ButtonBurger';
import Image from 'next/image';
import CheckboxIos from 'src/components/UI/CheckboxIos';

interface IProps {
  refSection: {
    refHeader: React.RefObject<HTMLElement>;
    refAbout: React.RefObject<HTMLElement>;
    refPortfolio: React.RefObject<HTMLElement>;
    refContact: React.RefObject<HTMLElement>;
  };
  handleToggleDarkTheme: () => void;
  toggle: boolean;
}

function SideDraw(props: IProps) {
  const { refSection, toggle, handleToggleDarkTheme } = props;

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

  const goToElement = (element: HTMLElement) => {
    scrollToElement(element);
    setIsToggle(false);
  };

  return (
    <>
      <nav
        className={`${styles.navSideDraw} ${
          isToggle ? styles.navSideDrawActive : ''
        }`}
      >
        <div className='container'>
          <ul className={styles.navSideDrawList}>
            <li
              className={`${styles.navSideDrawItem} ${styles.navSideDrawLogo}`}
              onClick={() =>
                goToElement(refSection.refHeader.current as HTMLElement)
              }
            >
              <Image
                src={
                  toggle ? '/images/logo-dark-theme.png' : '/images/logo.png'
                }
                alt='Logo'
                width={100}
                height={32}
              />
            </li>
            <li className={styles.navSideDrawItem}>
              <ButtonBurger isToggle={isToggle} toggle={handleToggleNav} />
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`${styles.navSide} ${isToggle ? styles.navSideActive : ''}`}
      >
        <ul className='Nav__side--list'>
          <li
            className={styles.navSideItem}
            onClick={() =>
              goToElement(refSection.refAbout.current as HTMLElement)
            }
          >
            About me
          </li>
          <li
            className={styles.navSideItem}
            onClick={() =>
              goToElement(refSection.refPortfolio.current as HTMLElement)
            }
          >
            Portfolio
          </li>
          <li
            className={styles.navSideItem}
            onClick={() =>
              goToElement(refSection.refContact.current as HTMLElement)
            }
          >
            Contact
          </li>
        </ul>
        <div className={styles.btnToggle}>
          <CheckboxIos
            id={1}
            isChecked={toggle}
            handleToggle={handleToggleDarkTheme}
          />
        </div>
      </div>
    </>
  );
}

export default React.memo(SideDraw);
