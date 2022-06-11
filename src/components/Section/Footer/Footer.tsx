import Image from 'next/image';
import React from 'react';

import styles from './index.module.css';

type TProps = {
  toggle: boolean;
};

function Footer(props: TProps) {
  const { toggle } = props;

  return (
    <footer className={`container ${styles.footer}`}>
      <Image
        src={toggle ? '/images/logo-footer2.png' : '/images/logo-footer1.png'}
        alt=''
        width={112}
        height={86}
      />
      <p>Copyright &copy; {new Date().getFullYear()}, HGH</p>
    </footer>
  );
}

export default React.memo(Footer);
