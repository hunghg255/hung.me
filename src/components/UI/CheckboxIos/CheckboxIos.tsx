import React from 'react';

import styles from './index.module.css';

interface IProps {
  handleToggle: (e: any) => void;
  id: number;
  isChecked: boolean;
}

export default function CheckboxIos(props: IProps) {
  const refCb = React.useRef<HTMLInputElement>(null);
  const { id, handleToggle, isChecked } = props;

  React.useEffect(() => {
    if (isChecked) {
      if (refCb && refCb.current) {
        refCb.current.checked = true;
      }
      return;
    }
    if (refCb && refCb.current) {
      refCb.current.checked = false;
    }
  }, [isChecked]);

  return (
    <div className={styles.checkboxIos}>
      <input
        type='checkbox'
        ref={refCb}
        id={`cbios-${id}`}
        className={styles.cbios}
        onChange={handleToggle}
      />
      <label htmlFor={`cbios-${id}`} className={styles.cbiosLabel}>
        <span className={styles.btnToggleCircle}>
          <span className={`${styles.btnCircle} ${styles.circle1}`}></span>
          <span className={`${styles.btnCircle} ${styles.circle2}`}></span>
          <span className={`${styles.btnCircle} ${styles.circle3}`}></span>
        </span>

        <span className={`${styles.btnToggleStar} ${styles.star1}`}></span>
        <span className={`${styles.btnToggleStar} ${styles.star2}`}></span>
        <span className={`${styles.btnToggleStar} ${styles.star3}`}></span>
        <span className={`${styles.btnToggleStar} ${styles.star4}`}></span>
        <span className={`${styles.btnToggleStar} ${styles.star5}`}></span>
      </label>
    </div>
  );
}
