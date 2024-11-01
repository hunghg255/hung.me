'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Mdx = dynamic(() => import('src/components/MDX/MDXContent.work'), {
  ssr: false,
});

const WorkClient = ({ code }: any) => {
  return <Mdx code={code} />;
};

export default WorkClient;
