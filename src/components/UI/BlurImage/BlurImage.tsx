'use client';
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';

import classNames from 'classnames';
import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

import styles from './index.module.scss';

export function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={classNames(styles.blurImage, {
        [styles.animatePulse]: isLoading,
      })}
    >
      <NextImage
        {...props}
        className={classNames(styles.image, {
          [styles.loading]: isLoading,
        })}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </div>
  );
}
