'use client';

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

interface CardRotateProps {
  index: number;
  currentIndex: number;
  children: React.ReactNode;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
}

function SwipeCard({ children, onSwipeRight, onSwipeLeft, index, currentIndex }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-100, 100], [0.9, 1.1]);
  const rotateZ = useTransform(x, [-100, 100], [-20, 20]);

  function handleDragEnd(_: any, info: PanInfo) {
    const threshold = 180;
    if (info.offset.x > threshold) {
      onSwipeRight();
    } else if (info.offset.x < -threshold) {
      onSwipeLeft();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className='absolute cursor-grab left-1/2 top-1/2 '
      initial={{
        translateX: '-50%',
        translateY: '-50%',
      }}
      style={{
        x,
        y,
        scale,
        rotateZ,
        zIndex: -Math.abs(currentIndex - index) * 10,
      }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

const testimonials = [
  {
    testimonial:
      'Gesturs has revolutionized our development process. Their UI library is incredibly intuitive and easy to use.',
    personName: 'John Doe',
    image: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f',
    profession: 'Chief Operating Officer',
    companyName: 'Tech Solutions Inc.',
  },
  {
    testimonial:
      "I can't imagine working without Gesturs. It has streamlined our workflow and increased our team's collaboration.",
    personName: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
    profession: 'Project Manager',
    companyName: 'Innovatech Ltd.',
  },
  {
    testimonial:
      'The support team at Gesturs is outstanding. They were always ready to help and went above and beyond to meet our needs.',
    personName: 'Samuel Green',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy',
    profession: 'Head of Customer Support',
    companyName: 'Customer First Corp.',
  },
  {
    testimonial:
      "Gesturs has simplified our processes and allowed us to focus on what we do best. It's a fantastic solution.",
    personName: 'Emily Johnson',
    image: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f',
    profession: 'Operations Manager',
    companyName: 'Business Solutions Co.',
  },
  {
    testimonial:
      "Gesturs' innovative approach and dedication to quality have truly set them apart in the industry.",
    personName: 'Michael Brown',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    profession: 'CEO',
    companyName: 'NextGen Innovations',
  },
];

export default function Work21() {
  const [currentCard, setCurrentCard] = useState(0);

  const swipeLeft = (index: number) => {
    if (index !== currentCard) {
      setCurrentCard(index);
    }
    if (currentCard === testimonials.length - 1) return;
    setCurrentCard((prev) => prev + 1);
  };

  const swipeRight = (index: number) => {
    if (index !== currentCard) {
      setCurrentCard(index);
    }
    if (currentCard === 0) return;
    setCurrentCard((prev) => prev - 1);
  };

  return (
    <div className='relative h-[400px] w-[400px]' style={{ perspective: 600 }}>
      {testimonials.map((card, index) => {
        return (
          <SwipeCard
            key={card.personName}
            onSwipeRight={() => swipeRight(index)}
            onSwipeLeft={() => swipeLeft(index)}
            index={index}
            currentIndex={currentCard}
          >
            <motion.div
              animate={{
                rotateZ: (index - currentCard) * 2,
                rotateX: -Math.abs(index - currentCard) * 3,
                scale: 1 - Math.abs(index - currentCard) * 0.07,
                x: -(currentCard - index) * 20,
                y: -Math.abs(index - currentCard) * 4,
              }}
              initial={false}
              transition={{ type: 'spring', stiffness: 160, damping: 8 }}
            >
              <div className='h-72 w-72  bg-zinc-900 text-card-foreground shadow-md rounded-xl border-[1.5px] border-muted'>
                <div className='p-6 space-y-1.5'>
                  <h2 className='text-lg'>{card.companyName}</h2>
                </div>
                <div className='p-6 space-y-1.5'>
                  <p className='text-base'>{card.testimonial}</p>
                </div>
                <div className='p-6 pt-0 space-y-2'>
                  <div className='flex items-center'>
                    <Image
                      src={card.image}
                      alt={card.personName}
                      className='w-8 h-8 rounded-full object-cover'
                      width={100}
                      height={100}
                    />
                    <div className='ml-2'>
                      <h3 className='text-sm font-semibold'>{card.personName}</h3>
                      <p className='text-xs'>{card.profession}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwipeCard>
        );
      })}
    </div>
  );
}
