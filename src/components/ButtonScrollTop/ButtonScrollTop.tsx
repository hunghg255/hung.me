import React, { useEffect, useState } from 'react';
import { scrollToElement } from '../../utils/utils';

import './ButtonScrollTop.css';

interface Iprops {
  refHeader: React.RefObject<HTMLElement>;
}

export default function ButtonScrollTop(props: Iprops) {
  const [active, setactive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }, [active]);

  const scrollTop = () => {
    setactive(false);
    scrollToElement(props.refHeader.current as HTMLElement);
  };

  return (
    <div className={`btn__scrollTop ${active ? 'btn__scrollTop--active' : ''}`}>
      <button type='button' onClick={scrollTop}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          viewBox='0 0 24 24'
        >
          <path d='M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z' />
        </svg>
      </button>
    </div>
  );
}
