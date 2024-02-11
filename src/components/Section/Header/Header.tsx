'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import Sparkles from 'src/components/UI/Sparkles/Sparkles';
import { onGotoElement } from 'src/utils';

import Canvas from './Canvas';
import styles from './index.module.scss';

function Header() {
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
  }, [idxTag, tags.length]);

  return (
    <header className={styles.header} id='sectionHeader'>
      <div className={styles.headerText}>
        <h1>
          Hello ✌🏼,
          <br />
          I&apos;m
          <Sparkles>
            <span className={styles.headerName}>Hung</span>
          </Sparkles>
        </h1>
        <h2>
          A
          <div className={styles.headerTagWrapper}>
            <span className={styles.headerTag}>{tags[idxTag]}</span>
          </div>
          Front-end developer
          <span className={styles.block}>|</span>
        </h2>
        <button onClick={() => onGotoElement('sectionAbout')} type='button'>
          About me
        </button>
      </div>
      <div className={styles.headerImage}>
        <Image
          src={'/images/logo-large.png'}
          alt=''
          width={1120}
          height={1178}
          className='object-contain'
          priority={true}
        />
      </div>

      {/* <svg
        strokeWidth={0}
        viewBox='0 0 24 24'
        className={styles.headerSvg}
        height={56}
        width={56}
        xmlns='http://www.w3.org/2000/svg'
        onClick={() => onGotoElement('sectionAbout')}
      >
        <path d='m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z' />
        <path d='m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z' />
      </svg> */}

      <Canvas />
    </header>
  );
}

export default React.memo(Header);
