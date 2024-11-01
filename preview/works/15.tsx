'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { Calendar, Flag, Folder, Notebook, NotepadText, Plus, Trophy, X } from 'lucide-react';

export default function Works15() {
  const [expand, setExpand] = useState(false);
  const closureButton = [
    { icon: <Folder size={18} />, text: 'Project' },
    { icon: <NotepadText size={18} />, text: 'Task' },
    { icon: <Notebook size={18} />, text: 'Note' },
    { icon: <Trophy size={18} />, text: 'Goal' },
    { icon: <Flag size={18} />, text: 'Milestone' },
    { icon: <Calendar size={18} />, text: 'Reminder' },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpand(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    // <MotionConfig transition={{ duration: 0.75 }}>
    <MotionConfig transition={{ ease: 'anticipate', duration: 0.75 }}>
      <div className='relative'>
        <motion.button
          layoutId='wrapper'
          onClick={() => setExpand(true)}
          style={{ borderRadius: 30 }}
          className='flex items-center gap-2 rounded-full p-[10px] font-medium text-accent-foreground bg-zinc-900'
        >
          <motion.span exit={{ scale: 1.5 }} layoutId='icon' className='inline-block'>
            <Plus size={18} />
          </motion.span>
          <motion.span layoutId='create' layout='preserve-aspect' className='inline-block'>
            Create New
          </motion.span>
        </motion.button>
        <AnimatePresence mode='popLayout'>
          {expand && (
            <div className='absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2'>
              <motion.div
                layoutId='wrapper'
                style={{ borderRadius: 12 }}
                className='overflow-hidden text-accent-foreground bg-zinc-900 p-[10px] '
              >
                <div className='flex items-center justify-between pb-1'>
                  <motion.p layoutId='create' layout='preserve-aspect' className='inline-block'>
                    Create New
                  </motion.p>
                  <motion.span
                    layoutId='icon'
                    className='inline-block cursor-pointer'
                    onClick={() => setExpand(false)}
                  >
                    <X size={18} />
                  </motion.span>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.75, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{
                    opacity: 0,
                    filter: 'blur(10px)',
                    transition: { ease: 'anticipate', duration: 0.2 },
                  }}
                  className='grid grid-cols-2 gap-2 rounded bg-accent p-2 md:grid-cols-3'
                >
                  {closureButton.map((button, i) => (
                    <button
                      key={i}
                      className='flex flex-col items-center gap-2 rounded-2xl px-4 py-2 font-medium transition-colors duration-300 ease-in-out  hover:bg-zinc-900'
                    >
                      <span>{button.icon}</span>
                      <span>{button.text}</span>
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
