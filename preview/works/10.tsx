'use client';

import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

export default function Work10() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='h-screen max-h-[696px] w-full max-w-[561px] rounded-[14px] bg-[#0D0D0D] p-3 shadow-[0px_8px_66px_19px_rgba(0,0,0,0.28)]'>
      <div className='flex h-full w-full flex-col rounded-2xl border border-[#4E4E4E]'>
        <div className='flex grow items-center justify-center'>
          <MotionConfig
            transition={{
              duration: 0.4,
              type: 'tween',
              ease: 'easeInOut',
            }}
          >
            <AnimatePresence initial={false}>
              <motion.button
                className={`relative isolate flex h-[172px] w-[332px] items-center rounded-full p-2 ${
                  toggle ? 'justify-end' : 'justify-start'
                }`}
                initial={{
                  backgroundColor: '#272727',
                  boxShadow: '0px 0px 19.8px 0px rgba(0, 0, 0, 0.35) inset',
                }}
                animate={{ backgroundColor: toggle ? '#ffffff' : '#272727' }}
                onClick={() => setToggle(!toggle)}
              >
                <motion.div
                  className='absolute left-0 -z-10 flex w-full justify-between text-4xl font-medium tracking-[0.0475rem]'
                  animate={{ color: toggle ? '#797979' : '#A2A2A2' }}
                >
                  <span className='flex w-full justify-center'>ON</span>
                  <span className='flex w-full justify-center'>OFF</span>
                </motion.div>

                {/* Main circle */}
                <motion.div
                  layout
                  className='flex aspect-square h-full rounded-full border-2 p-2 shadow-[0px_12px_43px_0px_rgba(0,0,0,0.70)]'
                  animate={{
                    backgroundColor: toggle ? '#ffffff' : '#363636',
                    borderColor: toggle ? '#D8D8D8' : '#535353',
                  }}
                >
                  <motion.div
                    className='h-full w-full rounded-full'
                    animate={{
                      color: toggle ? '#D6D6D6' : '#464646',
                      boxShadow: toggle
                        ? '2px 80px 72.5px -31px rgba(0, 0, 0, 0.2) inset, 0px 4px 13.4px 0px rgba(0, 0, 0, 0.43)'
                        : '2px 80px 72.5px -31px rgba(0, 0, 0, 0.49) inset, 0px 4px 13.4px 0px rgba(0, 0, 0, 0.43)',
                    }}
                  ></motion.div>
                </motion.div>
              </motion.button>
            </AnimatePresence>
          </MotionConfig>
        </div>
        <div className='flex h-[196px] items-center justify-center border-t border-[#4e4e4e]'>
          <h2 className='text-3xl font-medium tracking-[-0.0175rem] text-white'>
            Skeuomorphic Toggle
          </h2>
        </div>
      </div>
    </div>
  );
}
