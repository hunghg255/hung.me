import React from 'react';

import Logo from 'src/components/UI/Icon/logo';
import Sparkles from 'src/components/UI/Sparkles/Sparkles';

import styles from './index.module.scss';

function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <Sparkles>
        <Logo />
      </Sparkles>
      <p>Copyright &copy; {new Date().getFullYear()}, Gia Hung</p>
    </footer>
  );
}

export default React.memo(Footer);
