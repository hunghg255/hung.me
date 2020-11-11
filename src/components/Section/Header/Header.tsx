/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

import './Header.css';

import LogoLarge from '../../../Image/logo-large.png';
import { scrollToElement } from '../../../utils/utils';

interface IProps {
  refHeader: React.RefObject<HTMLElement>;
  refAbout: React.RefObject<HTMLElement>;
}

function Header(props: IProps) {
  const { refAbout, refHeader } = props;

  const [idxTag, setIdxTag] = useState(0);
  const tags = ['committed', 'self-taught', 'passionate'];

  React.useEffect(() => {
    setTimeout(() => {
      if (idxTag === tags.length - 1) {
        setIdxTag(0);
      } else {
        setIdxTag(idxTag + 1);
      }
    }, 1000);
  }, [idxTag]);

  return (
    <header className='header' ref={refHeader}>
      <div className='header__text'>
        <h1>
          Hello ✌🏼,
          <br />
          I'm
          <span className='header__name'>Hung</span>
        </h1>
        <h2>
          A
          <div className='header__tag-wrapper'>
            <span className='header__tag'>{tags[idxTag]}</span>
          </div>
          Front-end developer
        </h2>
        <button
          onClick={() => scrollToElement(refAbout.current as HTMLElement)}
          type='button'
        >
          About me
        </button>
      </div>
      <div className='header__image'>
        <img src={LogoLarge} alt='' />
      </div>
    </header>
  );
}

export default React.memo(Header);
