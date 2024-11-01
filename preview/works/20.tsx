'use client';

import { cn } from '@/src/lib/utils';
import { AnimatePresence, motion, MotionConfig, Variants } from 'framer-motion';
import { ChartBar, ChartPie, ChevronDown, House } from 'lucide-react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import useMeasure from 'react-use-measure';

interface NavLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  activeIndex: number | null;
  index: number;
}

const NavLink = React.forwardRef<HTMLButtonElement, NavLinkProps>(
  ({ children, activeIndex, index, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className='flex items-center gap-2'>
        <span
          className={cn(
            'text-sm text-muted-foreground transition-colors duration-300 ease-in-out md:text-lg',
            activeIndex === index && 'text-foreground',
          )}
        >
          {children}
        </span>
        <ChevronDown
          className={cn(
            'size-2.5 transition-transform duration-300 ease-in-out md:size-4',
            activeIndex === index && 'rotate-180',
          )}
        />
      </button>
    );
  },
);

NavLink.displayName = 'NavLink';

function Product() {
  return (
    <div className='grid grid-cols-2 p-2 md:grid-cols-3'>
      <div className='space-y-2'>
        <h4 className='text-sm font-normal'>Startup</h4>
        <ul className='space-y-1 text-sm text-muted-foreground'>
          <li>Book Keeping</li>
          <li>invoicing</li>
        </ul>
      </div>
      <div className='space-y-2'>
        <h4 className='text-sm font-normal'>Scaleup</h4>
        <ul className='space-y-1 text-sm text-muted-foreground'>
          <li>Live Coaching</li>
          <li>Reviews</li>
          <li>Tax/VAT</li>
        </ul>
      </div>
      <div className='space-y-2'>
        <h4 className='text-sm font-normal'>Enterprise</h4>
        <ul className='space-y-1 text-sm text-muted-foreground'>
          <li>White glove</li>
          <li>SOX Compliance</li>
          <li>Staffing</li>
          <li>more...</li>
        </ul>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className='grid grid-cols-3 gap-2 divide-x'>
      <div className='grid justify-items-center p-1 text-center'>
        <House className='size-4' />
        <p className='text-muted-foreground'>Startup</p>
      </div>
      <div className='grid justify-items-center p-1 text-center'>
        <ChartBar className='size-4' />
        <p className='text-muted-foreground'>Scaleup</p>
      </div>
      <div className='grid justify-items-center p-1 text-center'>
        <ChartPie className='size-4' />
        <p className='text-muted-foreground'>Enterprise</p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className='grid max-w-xs grid-cols-1 gap-4 p-2 md:max-w-lg md:grid-cols-2'>
      <div className='grid grid-flow-row auto-rows-auto gap-2'>
        <Image
          src='/placeholder.png'
          alt='placeholder'
          width={200}
          height={200}
          className='aspect-video h-24 w-full rounded-lg object-cover'
        />
        <div>
          <h4 className='line-clamp-1 text-base font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h4>
          <p className='line-clamp-2 text-sm text-muted-foreground md:line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui consectetur iste
            veritatis nesciunt ullam dolor deserunt excepturi quasi ea, odit maiores ab quam dicta
            officiis quia voluptates voluptatibus error?
          </p>
        </div>
      </div>
      <div className='grid grid-flow-row auto-rows-auto gap-2'>
        <Image
          src='/placeholder.png'
          alt='placeholder'
          width={200}
          height={200}
          className='aspect-video h-24 w-full rounded-lg object-cover'
        />
        <div>
          <h4 className='line-clamp-1 text-base font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h4>
          <p className='line-clamp-2 text-sm text-muted-foreground md:line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui consectetur iste
            veritatis nesciunt ullam dolor deserunt excepturi quasi ea, odit maiores ab quam dicta
            officiis quia voluptates voluptatibus error?
          </p>
        </div>
      </div>
    </div>
  );
}

const contentVarient: Variants = {
  initial: (d: number) => ({
    opacity: 0,
    x: `${100 * d}%`,
    filter: 'blur(8px)',
  }),
  animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: (d: number) => ({
    opacity: 0,
    x: `${-100 * d}%`,
    filter: 'blur(8px)',
  }),
};

export default function Work20() {
  const Tabs = ['Products', 'Pricing', 'Blog'];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dir, setDir] = useState<null | 'l' | 'r'>(null);
  const [counter, setCounter] = useState(0);

  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    switch (activeIndex) {
      case 0:
        return <Product />;
      case 1:
        return <Pricing />;
      case 2:
        return <Blog />;
    }
  }, [activeIndex]);

  const handleMouseEnter = (index: number) => {
    if (typeof activeIndex === 'number') {
      setDir(activeIndex > index ? 'l' : 'r');
    }
    setActiveIndex(index);
  };

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        stiffness: 26.7,
        damping: 4.1,
        mass: 0.2,
      }}
    >
      <div>
        <div
          className='relative flex items-center gap-4'
          onMouseLeave={() => {
            setActiveIndex(null);
            setDir(null);
          }}
        >
          {Tabs.map((tab, index) => (
            <NavLink
              key={index}
              index={index}
              activeIndex={activeIndex}
              onMouseEnter={() => {
                handleMouseEnter(index);
                setCounter(counter + 1);
              }}
            >
              {tab}
            </NavLink>
          ))}

          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 8,
                }}
                style={{ x: '-50%' }}
                className='absolute left-1/2 top-full pt-4'
              >
                <motion.div
                  animate={{ height: bounds.height, width: bounds.width }}
                  className='radientBg relative w-max overflow-hidden rounded-[10px] border bg-gradient-to-b  from-zinc-900 via-zinc-900 to-zinc-800 shadow-white/5'
                >
                  <div ref={ref} className='w-max p-2'>
                    <AnimatePresence
                      mode='popLayout'
                      custom={dir === 'l' ? 1 : dir === 'r' ? -1 : 0}
                    >
                      <motion.div
                        key={`content-${activeIndex}-${counter}`}
                        variants={contentVarient}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        custom={dir === 'l' ? 1 : dir === 'r' ? -1 : 0}
                      >
                        {content}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
