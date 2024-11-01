import { getBlogWebTotal } from '@/src/utils/web-total';
import { Suspense } from 'react';
import Blogs, { BlogsSkeleton } from 'src/components/Blogs/Blogs';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';

const BlogPage = async () => {
  const blogsWebtotal = await getBlogWebTotal();

  return (
    <LayoutBlog>
      <Suspense fallback={<BlogsSkeleton />}>
        <Blogs blogsWebtotal={blogsWebtotal} />
      </Suspense>
    </LayoutBlog>
  );
};

export default BlogPage;
