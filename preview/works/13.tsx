import React, { useRef, useState } from 'react';
import { useMotionValue, motion, useTransform, animate, useMotionValueEvent } from 'framer-motion';

function decay(value: number, max: number) {
  let entry = value / max;
  let sigmoid = 2 / (1 + Math.exp(-entry)) - 1;
  let exit = sigmoid * max;

  return exit;
}

export default function Works13() {
  const [value, setValue] = useState([0]);
  const [position, setPosition] = useState<'top' | 'middle' | 'bottom'>('middle');

  const clientY = useMotionValue(0);
  const y = useMotionValue(1);

  const ref = useRef<HTMLDivElement>(null);

  useMotionValueEvent(clientY, 'change', (latestValue) => {
    if (!ref.current) return;

    let overflow = latestValue - ref.current.getBoundingClientRect().top;

    if (overflow < 0) {
      y.jump(decay(overflow, 50));
      setPosition('bottom');
    } else if (overflow > 200) {
      y.jump(decay(overflow - 200, 50));
      setPosition('top');
    } else {
      y.jump(1);
      setPosition('middle');
    }
  });

  return <div className='flex h-96 flex-col items-center justify-center gap-12'>Hello</div>;
}
