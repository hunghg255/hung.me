'use client';

import React from 'react';

import Logo from 'src/components/UI/IconSvg/logo';
import Sparkles from 'src/components/UI/Sparkles/Sparkles';

import styles from './index.module.scss';

function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <Sparkles>
        <Logo />
      </Sparkles>
      <p>Copyright &copy; 2020 - Present, Gia Hung</p>
    </footer>
  );
}

export default React.memo(Footer);
