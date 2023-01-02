import { FC, useEffect, useRef } from 'react';

import styles from './index.module.css';

const Cursor: FC = () => {
  const isFirstMove = useRef(true);

  const cursorRef = useRef<HTMLDivElement>(null);

  const realMouse = useRef({
    x: 0,
    y: 0,
  });
  const displayedMouse = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    window.addEventListener('mousemove', (e) => {
      if (cursorRef.current) {
        if (isFirstMove.current) {
          cursorRef.current.style.display = 'block';
          displayedMouse.current.x = e.clientX;
          displayedMouse.current.y = e.clientY;
          isFirstMove.current = false;
        }

        realMouse.current.x = e.clientX;
        realMouse.current.y = e.clientY;
      }
    });

    const updateMouse = () => {
      requestAnimationFrame(updateMouse);

      displayedMouse.current.x +=
        (realMouse.current.x - displayedMouse.current.x) * 0.1;
      displayedMouse.current.y +=
        (realMouse.current.y - displayedMouse.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${displayedMouse.current.x}px`;
        cursorRef.current.style.top = `${displayedMouse.current.y}px`;
      }
    };

    updateMouse();
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
};

export default Cursor;
1;
