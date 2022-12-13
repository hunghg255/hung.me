import React from 'react';
import Logo from 'src/components/UI/Icon/logo';

import styles from './index.module.css';

type TProps = {
  toggle: boolean;
};

function Footer(props: TProps) {
  const { toggle } = props;

  return (
    <footer className={`container ${styles.footer}`}>
      <Logo />
      <p>Copyright &copy; {new Date().getFullYear()}, HGH</p>
    </footer>
  );
}

export default React.memo(Footer);
