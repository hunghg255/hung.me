import React from 'react';

import styles from './index.module.css';

interface IPropsButtonBurger {
  isToggle: boolean;
  toggle: () => void;
}

export default function ButtonBurger(props: IPropsButtonBurger) {
  return (
    <div
      className={`${styles.btnBurger} ${props.isToggle ? styles.btnBurgerActive : ''}`}
      onClick={props.toggle}
    >
      <div className={styles.btnBurgerLine}></div>
      <div className={styles.btnBurgerLine}></div>
      <div className={styles.btnBurgerLine}></div>
    </div>
  );
}
