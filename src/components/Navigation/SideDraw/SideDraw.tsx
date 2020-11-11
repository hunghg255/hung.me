/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import ButtonBurger from '../../UI/ButtonBurger/ButtonBurger';

import './SideDraw.css';
import ImgLogo from '../../../Image/logo.png';
import ImgLogoDark from '../../../Image/logo-dark-theme.png';
import CheckboxIos from '../../UI/CheckboxIos/CheckboxIos';
import { scrollToElement } from '../../../utils/utils';

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

  const [isToggle, setisToggle] = useState(false);

  const handleToggleNav = () => {
    setisToggle(!isToggle);
  };

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight > 600) {
        setisToggle(false);
      }
    });
  }, []);

  const goToElement = (element: HTMLElement) => {
    scrollToElement(element);
    setisToggle(false);
  };

  return (
    <>
      <nav
        className={`Nav__sidedraw ${isToggle ? 'Nav__sidedraw--active' : ''}`}
      >
        <div className='container'>
          <ul className='Nav__sidedraw-list'>
            <li
              className='Nav__sidedraw-item Nav__sidedraw--logo'
              onClick={() =>
                goToElement(refSection.refHeader.current as HTMLElement)
              }
            >
              <img src={toggle ? ImgLogoDark : ImgLogo} alt='Logo' />
            </li>
            <li className='Nav__sidedraw-item'>
              <ButtonBurger isToggle={isToggle} toggle={handleToggleNav} />
            </li>
          </ul>
        </div>
      </nav>
      <div className={`Nav__side ${isToggle ? 'Nav__side--active' : ''}`}>
        <ul className='Nav__side--list'>
          <li
            className='Nav__side--item'
            onClick={() =>
              goToElement(refSection.refAbout.current as HTMLElement)
            }
          >
            About me
          </li>
          <li
            className='Nav__side--item'
            onClick={() =>
              goToElement(refSection.refPortfolio.current as HTMLElement)
            }
          >
            Portfolio
          </li>
          <li
            className='Nav__side--item'
            onClick={() =>
              goToElement(refSection.refContact.current as HTMLElement)
            }
          >
            Contact
          </li>
        </ul>
        <div className='btn__toggle'>
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
