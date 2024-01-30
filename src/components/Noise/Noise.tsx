import React from 'react';

import styles from './index.module.scss';

const Noise = () => {
  return (
    <svg className={styles.svg} width='100%' height='100%'>
      <filter id='pedroduarteisalegend'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.80'
          numOctaves='4'
          stitchTiles='stitch'
        />
      </filter>
      <rect width='100%' height='100%' filter='url(#pedroduarteisalegend)'></rect>
    </svg>
  );
};

export default Noise;
