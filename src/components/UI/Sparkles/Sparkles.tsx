'use client';
import React from 'react';

import styles from './index.module.css';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const COLOR = [
  '#4da1ff',
  '#ffc24e',
  '#59aa43',
  '#ba53ff',
  '#56acb8',
  '#7764ed',
  '#16d5ff',
  '#00dfb7',
  '#1d297f',
  '#476055',
  '#ee7420',
  '#06c270',
  '#ffb800',
  '#ff3b3b',
];

const randomColor = () => COLOR[Math.floor(Math.random() * COLOR.length)];

// Default color is a bright yellow
const DEFAULT_COLOR = '#FFC700';

const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10_000, 99_999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(15, 30),
    style: {
      position: 'absolute',
      // Pick a random spot in the available space
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      // Float sparkles above sibling content
      zIndex: 2,
    },
  };
};

const range = (start, end, step = 1) => {
  const output = [];
  if (end === undefined) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = React.useRef(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }

    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};

function SparkleInstance({ color, size, style }: any) {
  return (
    <span className={styles.svgWrap} style={style}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 68 68'
        fill='none'
        style={style}
        className={styles.svg}
      >
        <path
          d='M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'
          fill={color}
        />
      </svg>
    </span>
  );
}

const Sparkles = ({ children }: any) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(0, 3).map(() => generateSparkle(randomColor()));
  });

  useRandomInterval(
    () => {
      const now = Date.now();
      // Create a new sparkle
      const sparkle = generateSparkle(randomColor());
      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });
      // Include our new sparkle
      nextSparkles.push(sparkle);
      // Make it so!
      setSparkles(nextSparkles);
    },
    50,
    500,
  );

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {sparkles.map((sparkle) => (
        <SparkleInstance
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong
        style={{
          position: 'relative',
          zIndex: 1,
          fontWeight: 'bold',
        }}
      >
        {children}
      </strong>
    </span>
  );
};

export default Sparkles;
