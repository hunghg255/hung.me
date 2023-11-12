'use client';
import { FC, useEffect, useRef } from 'react';

import styles from './index.module.css';

function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function getSqueeze(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const maxSqueeze = 0.15;
  const accelerator = 750;
  return Math.min(distance / accelerator, maxSqueeze);
}

export function useCursor() {
  const pos = { x: 0, y: 0 }; // cursor's coordinates
  const speed = 0.1; // between 0 and 1

  const updateCursor = ({ x, y }) => {
    const diffX = Math.round(x - pos.x);
    const diffY = Math.round(y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
    const rotate = `rotate(${angle}deg)`;

    return { transform: rotate + scale };
  };

  return { updateCursor };
}

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

  const { updateCursor } = useCursor();

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

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

      displayedMouse.current.x += (realMouse.current.x - displayedMouse.current.x) * 0.1;
      displayedMouse.current.y += (realMouse.current.y - displayedMouse.current.y) * 0.1;

      const styles = updateCursor({ x: realMouse.current.x, y: displayedMouse.current.y });

      if (cursorRef.current) {
        cursorRef.current.style.left = `${displayedMouse.current.x}px`;
        cursorRef.current.style.top = `${displayedMouse.current.y}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%) ${styles.transform}`;
      }
    };

    updateMouse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
};

export default Cursor;
