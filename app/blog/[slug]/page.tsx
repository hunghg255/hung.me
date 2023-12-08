import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import BlogDetail, { BlogDetailSkeleton } from 'src/components/BlogDetail/BlogDetail';

import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';

export const revalidate = 30;

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const slugArr = params?.slug?.split('-');

  return (
    <LayoutBlog>
      <Suspense fallback={<BlogDetailSkeleton />}>
        {/* @ts-ignore */}
        <BlogDetail slug={slugArr[slugArr?.length - 1] as string} />
      </Suspense>
    </LayoutBlog>
  );
};

export default BlogDetailPage;
