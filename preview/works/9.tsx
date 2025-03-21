'use client';

import React, { useState } from 'react';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import IphoneSimulator from '@/src/components/IphoneSimulator/IphoneSimulator';

export default function Work9() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => setIsOpen(!isOpen);

  const y = useMotionValue(0);

  const ySmooth = useSpring(y);

  const borderRadius = useTransform(ySmooth, [0, 200], [0, 48]);
  const scale = useTransform(ySmooth, [0, 200], isOpen ? [0.8, 1] : [1, 1]);

  return (
    <IphoneSimulator className='overflow-hidden bg-black text-white'>
      <MotionConfig transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}>
        <motion.div layout style={{ scale }} className='px-4'>
          <h2 className='mb-3 mt-3'>Lorem Ipsum</h2>
          <div className='h-12 w-full rounded-lg bg-[#2c2c2c]'></div>
          <p className='mt-3 text-xs text-white/50'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur distinctio
            tenetur explicabo saepe ipsa quas, corrupti inventore sed ullam quaerat numquam minima
            eos, aliquid temporibus ducimus hic. Quo, doloremque?
          </p>
          <p className='mt-2 text-xs text-white/50'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, enim blanditiis,
            illum deleniti architecto alias at reprehenderit tenetur voluptate soluta dolor nostrum
            harum mollitia aperiam ipsam. Quasi iusto consequuntur unde!
          </p>
          <h2 className='mb-3 mt-3'>Lorem Ipsum</h2>
          <p className='mb-3 mt-3 text-xs text-white/50'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur distinctio
            tenetur explicabo saepe ipsa quas, corrupti inventore sed ullam quaerat numquam minima
            eos, aliquid temporibus ducimus hic. Quo, doloremque?
          </p>
          <div className='h-12 w-full rounded-lg bg-[#2c2c2c]'></div>
          <p className='mt-2 text-xs text-white/50'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, enim blanditiis,
            illum deleniti architecto alias at reprehenderit tenetur voluptate soluta dolor nostrum
            harum mollitia aperiam ipsam. Quasi iusto consequuntur unde!
          </p>
        </motion.div>

        <motion.button
          layoutId='wrapper'
          className='absolute bottom-12 right-4 h-12 w-12 bg-white'
          onClick={onClickHandler}
          style={{ borderRadius: 48 }}
        ></motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 bg-black/80'
            ></motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              layoutId='wrapper'
              drag='y'
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0.02, bottom: 0.3 }}
              onDragEnd={(event, info) => {
                if (info.offset.y > 200) {
                  onClickHandler();
                }
              }}
              className='absolute inset-0 flex flex-col items-center justify-center bg-white text-black'
              style={{ borderRadius, y }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.4,
                  type: 'tween',
                  ease: 'easeInOut',
                }}
                className='text-lg font-semibold'
              >
                Lorem Ipsum
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.4,
                  type: 'tween',
                  ease: 'easeInOut',
                }}
                className='max-w-[300px] text-center text-xs text-black/70'
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nisi impedit
                molestiae aspernatur ut repellendus eaque quam qui tempore placeat voluptatibus
                similique quaerat, velit deserunt sint dolore blanditiis ducimus nulla.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </IphoneSimulator>
  );
}
