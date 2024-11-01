import React from 'react';
import Link from 'next/link';

import { allWorks } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import WorkClient from './client-component';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/src/components/UI/Button/Button';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allWorks.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export async function generateMetadata({ params }: Props) {
  const findingGoal = allWorks.find((post) => params.slug === post.slugAsParams);

  return {
    title: findingGoal?.title,
  };
}

export default function DocsPage({ params: { slug } }: Props) {
  const findingGoal = allWorks.find((post) => slug === post.slugAsParams);

  if (!findingGoal) {
    return notFound();
  }

  return (
    <div className='max-w-[768px] w-[calc(100%_-_32px)] mx-[auto] my-[100px] bg-[#000000] p-[20px] rounded-[10px] border-[1px] border-solid border-[#1a1a1a]'>
      <div className='mx-auto mb-11 flex max-w-3xl items-center gap-6'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex gap-4 tabular-nums'>
            <span className='text-natural-700'>{String(Number(slug)).padStart(2, '0')}</span>{' '}
            <span>/</span> <span>{String(allWorks.length).padStart(2, '0')}</span>
          </div>
          <div>
            <Button variant={'ghost'} className='h-8 w-8 p-0' disabled={Number(slug) === 1}>
              <Link href={`/work/${Number(slug) - 1}`}>
                <ChevronLeft />
              </Link>
            </Button>
            <Button
              variant={'ghost'}
              className='h-8 w-8 p-0'
              disabled={Number(slug) === allWorks.length}
            >
              <Link href={`/work/${Number(slug) + 1}`}>
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <WorkClient code={findingGoal.body.code} />
    </div>
  );
}
