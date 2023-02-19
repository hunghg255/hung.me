import React, { useEffect, useState } from 'react';
import { onGotoElement } from 'src/utils';

import styles from './index.module.scss';

export default function ButtonScrollTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, [active]);

  const scrollTop = () => {
    setActive(false);
    onGotoElement('header');
  };

  return (
    <div className={`${styles.btnScrollTop} ${active ? styles.btnScrollTopActive : ''}`}>
      <button type='button' onClick={scrollTop} aria-label='Button Scroll Top'>
        <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
          <path d='M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z' />
        </svg>
      </button>
    </div>
  );
}
