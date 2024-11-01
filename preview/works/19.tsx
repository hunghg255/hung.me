'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { Banknote, CreditCard, Plus, Wallet, XCircle } from 'lucide-react';

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveCard: React.Dispatch<
    React.SetStateAction<{
      icon: any;
      title: string;
      description: string;
    }>
  >;
}

function Card({ icon, title, description, setOpen, setActiveCard }: CardProps) {
  return (
    <div
      className='flex cursor-pointer items-center gap-2'
      onClick={() => {
        setOpen(true);
        setActiveCard({ icon, title, description });
      }}
    >
      <div className='bg-zinc-950 p-2'>
        <motion.span layoutId={`icon-${title}`} className='block text-muted-foreground'>
          {icon}
        </motion.span>
      </div>
      <div className='flex flex-col'>
        <motion.p layoutId={`title-${title}`} layout='preserve-aspect'>
          {title}
        </motion.p>
        <motion.p layout='preserve-aspect' className='text-sm text-muted-foreground'>
          {description}
        </motion.p>
      </div>
    </div>
  );
}

interface InputWithLabelProps {
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
}
function InputWithLabel({ name, type }: InputWithLabelProps) {
  return (
    <div className='grid w-full items-center gap-1.5'>
      <label htmlFor={name}>{name}</label>
      <input
        className='bg-background p-2 border border-solid rounded-[8px]'
        type={type}
        id={name}
      />
    </div>
  );
}

function BankPaymentContent() {
  return (
    <Fragment>
      <InputWithLabel type='text' name='Full Name' />
      <InputWithLabel type='number' name='Account Number' />
      <InputWithLabel type='number' name='Bank Code' />
    </Fragment>
  );
}

function DebitCreditCard() {
  return (
    <Fragment>
      <div className='flex items-center justify-between text-muted-foreground'>
        <p>Available Cards</p>
        <button className='flex items-center gap-2 rounded-full border px-2.5 py-1 text-sm'>
          <span>
            <Plus className='size-4' />
          </span>
          <span>Add Card</span>
        </button>
      </div>
      <div className='flex items-center justify-between rounded-xl bg-muted p-2'>
        <div className='flex items-center gap-2'>
          <input type='checkbox' name='check' id='check' />
          <p>.....6756</p>
        </div>
        <CreditCard className='size-4' />
      </div>
      <div className='flex items-center justify-between rounded-xl bg-muted p-2'>
        <div className='flex items-center gap-2'>
          <input type='checkbox' name='check' id='check' className='rounded-full' />
          <p>.....6756</p>
        </div>
        <CreditCard className='size-4' />
      </div>
    </Fragment>
  );
}

export default function Work19() {
  const typesOfPayment = [
    {
      icon: <Banknote className='size-8' />,
      title: 'Bank Transfer',
      description: 'Transfer money to bank account',
    },
    {
      icon: <CreditCard className='size-8' />,
      title: 'Debit/Credit Card',
      description: 'Send money from your card',
    },
    {
      icon: <Wallet className='size-8' />,
      title: 'Wallet',
      description: 'Transfer money from your wallet',
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(typesOfPayment[0]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeCardContent = () => {
    switch (activeCard.title) {
      case 'Bank Transfer':
        return <BankPaymentContent />;
      case 'Debit/Credit Card':
        return <DebitCreditCard />;
    }
  };

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        bounce: 0.3,
        duration: 0.5,
      }}
    >
      <motion.div
        layoutId='wrapper'
        style={{ borderRadius: 12 }}
        className='space-y-4 bg-zinc-900 p-4 text-zinc-200'
      >
        <p className='text-muted-foreground'>Send Money</p>

        <div className='flex flex-col gap-4'>
          {typesOfPayment.map((type, i) => (
            <Card key={i} {...type} setOpen={setOpen} setActiveCard={setActiveCard} />
          ))}
        </div>
      </motion.div>

      {/* absolute div to show selected card */}
      <AnimatePresence mode='popLayout'>
        {open && activeCard.title !== 'Wallet' && (
          <div className='absolute left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 overflow-clip'>
            <motion.div layoutId='wrapper' style={{ borderRadius: 12 }} className='bg-zinc-900'>
              {/* first section */}
              <div className='flex items-center border-b p-2'>
                <div className='flex grow items-center gap-2 px-2'>
                  <motion.div layoutId={`icon-${activeCard.title}`}>{activeCard.icon}</motion.div>
                  <motion.p
                    layout='preserve-aspect'
                    layoutId={`title-${activeCard.title}`}
                    className='text-muted-foreground'
                  >
                    {activeCard.title}
                  </motion.p>
                </div>
                <div className='shrink-0 cursor-pointer' onClick={() => setOpen(false)}>
                  <XCircle className='size-6' />
                </div>
              </div>

              {/* second content */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{
                  opacity: 0,
                  filter: 'blur(8px)',
                  transition: { duration: 0.25 },
                }}
                style={{ originY: 50 }}
                className='flex flex-col gap-2 p-4'
              >
                {activeCardContent()}
              </motion.div>

              {/* button */}
              <div className='p-4 pt-0'>
                <motion.button
                  initial={{ opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{
                    opacity: 0,
                    filter: 'blur(8px)',
                    transition: { duration: 0.25 },
                  }}
                  className='w-full bg-zinc-950 p-2 text-zinc-200'
                >
                  Proceed
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
