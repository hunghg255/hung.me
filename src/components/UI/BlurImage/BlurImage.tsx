'use client';
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';

import classNames from 'classnames';
import NextImage from 'next/image';
import type { ImageProps as NextImageProps } from 'next/image';
import { usePathname } from 'next/navigation';

import styles from './index.module.scss';

// export function BlurImage(props: ImageProps) {
//   const [isLoading, setLoading] = useState(true);

//   return (
//     <div
//       className={classNames(styles.blurImage, {
//         [styles.animatePulse]: isLoading,
//       })}
//     >
//       <NextImage
//         {...props}
//         className={classNames(styles.image, {
//           [styles.loading]: isLoading,
//         })}
//         onLoad={() => {
//           setLoading(false);
//         }}
//       />
//     </div>
//   );
// }

let loadedImages: string[] = [];

function useImageLoadedState(src: any) {
  let pathname = usePathname();
  let uniqueImagePath = pathname + '__' + src;
  let [loaded, setLoaded] = useState(() => loadedImages.includes(uniqueImagePath));
  return [
    loaded,
    () => {
      if (loaded) return;
      loadedImages.push(uniqueImagePath);
      setLoaded(true);
    },
  ] as const;
}

export interface ImageProps extends Omit<NextImageProps, 'src' | 'priority'> {
  src: string;
}

export function BlurImage(props: ImageProps) {
  let { alt, src, loading = 'lazy', style, className, ...rest } = props;
  let [loaded, onLoad] = useImageLoadedState(src);

  return (
    <div
      className={classNames(
        'image-container relative overflow-hidden',
        !loaded && 'animate-pulse [animation-duration:4s]',
        className,
      )}
    >
      <NextImage
        className={classNames(
          'transition-all duration-500 [transition-timing-function:cubic-bezier(.4,0,.2,1)]',
          'h-full max-h-full w-full object-center',
          loaded ? 'blur-0' : 'blur-xl',
        )}
        src={src}
        alt={alt}
        style={{ objectFit: 'cover', ...style }}
        loading={loading}
        priority={loading === 'eager'}
        quality={100}
        onLoad={onLoad}
        {...rest}
      />
    </div>
  );
}
