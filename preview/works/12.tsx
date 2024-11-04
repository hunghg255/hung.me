import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { cn } from '@/src/lib/utils';

const TextEnter = ({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0.2, duration: 1.8 }}>
      <motion.h1
        initial='hidden'
        animate='visible'
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        className={cn('inline-block text-inherit', className)}
      >
        {children.split(' ').map((word, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 70, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            className='inline-block'
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </MotionConfig>
  );
};

export default function Works12() {
  return (
    <TextEnter className='text-white text-[28px]'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi quaerat reprehenderit
      beatae iste quos in est ipsam odio, et perferendis consectetur harum tenetur sint fuga, at
      laborum eaque modi!
    </TextEnter>
  );
}
