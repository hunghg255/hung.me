/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import './Navbar.css';

import CheckboxIos from '../../UI/CheckboxIos/CheckboxIos';
import ImgLogo from '../../../Image/logo.png';
import ImgLogoDark from '../../../Image/logo-dark-theme.png';
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

function Navbar(props: IProps) {
  const { refSection, handleToggleDarkTheme, toggle } = props;

  return (
    <nav className='Nav__bar'>
      <div className='container'>
        <ul className='Nav__list'>
          <li
            className='Nav__item Nav__item--logo'
            onClick={() =>
              scrollToElement(refSection.refHeader.current as HTMLElement)
            }
          >
            <img src={toggle ? ImgLogoDark : ImgLogo} alt='Logo' />
          </li>
          <li
            className='Nav__item'
            onClick={() =>
              scrollToElement(refSection.refAbout.current as HTMLElement)
            }
          >
            About me
          </li>
          <li
            className='Nav__item'
            onClick={() =>
              scrollToElement(refSection.refPortfolio.current as HTMLElement)
            }
          >
            Portfolio
          </li>
          <li
            className='Nav__item'
            onClick={() =>
              scrollToElement(refSection.refContact.current as HTMLElement)
            }
          >
            Contact
          </li>
          <li className='Nav__item'>
            <CheckboxIos
              id={2}
              isChecked={toggle}
              handleToggle={handleToggleDarkTheme}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
