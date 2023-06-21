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
        <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M6.7 14.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 8.425q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275Z'
          ></path>
        </svg>
      </button>
    </div>
  );
}
