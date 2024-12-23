'use client';

import React, { useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { Circle } from 'rc-progress';
import Image from 'next/image';
import { Reply } from 'lucide-react';

import { cn } from '@/src/lib/utils';
import IphoneSimulator from '@/src/components/IphoneSimulator/IphoneSimulator';
import { NavigatingDrag } from '@/src/components/NavigatingClick/NavigatingClick';
import { Button } from '@/src/components/UI/Button/Button';

const messages = [
  { from: 0, message: 'How are you?' },
  { from: 1, message: 'I am good thanks' },
  {
    from: 0,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellat voluptates totam excepturi omnis, necessitatibus dolorum quas est fugit quia ratione recusandae similique iure numquam, possimus molestias laboriosam a assumenda!',
  },
  {
    from: 0,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellat voluptates totam excepturi omnis, necessitatibus dolorum quas est fugit quia ratione recusandae similique iure numquam, possimus molestias laboriosam a assumenda!',
  },
];

export default function Work5() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => setIsOpen(!isOpen);

  return (
    <IphoneSimulator className='overflow-hidden bg-neutral-400'>
      <div className='absolute inset-0'>
        <header
          className='sticky top-0 z-30 grid grid-cols-3 items-center bg-white/80 pb-2 pt-[5.5rem] font-medium backdrop-blur-lg'
          style={{ borderTopLeftRadius: 42, borderTopRightRadius: 42 }}
        >
          <Button className='flex w-12 items-center gap-1 pl-2 text-blue-500'>
            <svg
              viewBox='0 0 12 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-3'
              style={{ flex: '0 0 auto' }}
            >
              <path
                d='M10.5312 1.36963L2.1398 9.47206C2.07194 9.53759 2.07194 9.64633 2.1398 9.71186L10.5312 17.8143'
                stroke='currentColor'
                strokeWidth='2.66667'
                strokeLinecap='round'
              />
            </svg>
            <span className='rounded-full bg-blue-500 px-1 py-0.5 text-xs text-white'>522</span>
          </Button>

          <div className='flex grow flex-col items-center'>
            <h2 className='text-black'>Hung Hoang</h2>
            <small className='-mt-1 inline-block text-xs font-light text-[#727472]'>
              699 subscribers
            </small>
          </div>

          <div className='flex justify-end pr-2'>
            <Button className='active:opacity-50' onClick={onClickHandler}>
              <Image
                src='/my-image.jpeg'
                width={40}
                height={40}
                alt='my-image'
                className='h-8 w-8 object-cover'
                style={{ borderRadius: 16 }}
              />
            </Button>
          </div>

          <div className='pointer-events-none absolute bottom-0 left-0 z-10 mt-2 grid w-full grid-cols-4 gap-2'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Button
                key={index}
                className='flex aspect-[8/6] w-full items-center justify-center rounded-lg bg-[#A2A2A4]/80 text-sm text-white opacity-0 backdrop-blur'
              >
                Button
              </Button>
            ))}
          </div>
        </header>

        <ul className='mt-3 flex h-full flex-col px-2'>
          {messages.map((message, index) => (
            <EachMessage key={index} message={message} index={index} />
          ))}
        </ul>

        <footer className='absolute bottom-0 z-10 flex h-16 w-full justify-center rounded-b-[42px] bg-white pt-2 font-normal text-[#1172E7]'>
          Mute
        </footer>
      </div>
    </IphoneSimulator>
  );
}

function EachMessage({
  message,
  index,
}: {
  message: { from: number; message: string };
  index: number;
}) {
  const [percentage, setPercentage] = useState(0);
  const scrollValue = useMotionValue(0);

  const opacity = useTransform(scrollValue, [0, -50], [0, 1]);
  const x = useTransform(scrollValue, [0, -50], [0, -40]);
  const scale = useTransform(scrollValue, [0, -50], [0.6, 1]);

  return (
    <div className='relative flex items-center'>
      <motion.li
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={(event, info) => {
          scrollValue.set(info.offset.x);
          if (info.offset.x > -50 && info.offset.x < 0) {
            setPercentage(Math.abs(info.offset.x) * 2);
          } else if (info.offset.x < -50) {
            setPercentage(100);
          }
        }}
        onDragEnd={() => {
          animate(scrollValue, 0);
          setPercentage(0);
        }}
        dragElastic={{ left: 0.5, right: 0.01 }}
        className={cn(
          'relative mb-2 flex w-fit max-w-[250px] flex-col rounded-lg p-2 pb-0.5 text-sm',
          message.from === 0 ? 'bg-white' : 'self-end bg-blue-500 text-white',
        )}
      >
        {index === 2 ? <NavigatingDrag /> : null}
        {message.message}
        <small className='self-end opacity-50'>4:00 AM</small>
      </motion.li>

      <motion.button
        className='absolute right-0 isolate flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-sm text-white backdrop-blur-md'
        style={{ opacity, x, scale }}
      >
        <motion.div
          animate={{
            opacity: percentage === 100 ? [0, 1, 0] : 0,
            scale: percentage === 100 ? 2 : 1,
          }}
          className='absolute inset-0 rounded-full border border-white'
        />
        <motion.div
          animate={{
            scale: percentage === 100 ? 0 : 1,
          }}
          className='absolute inset-0 -z-10 rounded-full bg-black/30'
        />

        <Reply className='h-4 w-4' />
        {percentage !== 100 ? (
          <Circle
            className='absolute'
            strokeWidth={3}
            strokeColor={'rgba(255, 255, 255, .8)'}
            percent={percentage}
          />
        ) : null}
      </motion.button>
    </div>
  );
}
