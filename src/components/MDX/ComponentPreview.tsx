'use client';

import React from 'react';

import { Index } from '../../../__registry__';
import { cn } from 'src/lib/utils';

interface Props {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export default function ComponentPreview({ name, className }: Props) {
  const Component = Index[name].component;

  if (name.includes('twitter-contents')) {
    return <Component />;
  }

  return (
    <div
      id='preview-container'
      className={cn(
        'border-wrapper relative mx-auto flex min-h-[30rem] max-w-3xl flex-col items-center justify-center overflow-hidden rounded-md px-8 py-8 shadow-custom-card bg-[#000]',
        className,
      )}
    >
      <Component />
    </div>
  );
}
