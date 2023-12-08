import { Suspense } from 'react';
import Blogs, { BlogsSkeleton } from 'src/components/Blogs/Blogs';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';

const BlogPage = async () => {
  return (
    <LayoutBlog>
      <Suspense fallback={<BlogsSkeleton />}>
        {/* @ts-ignore */}
        <Blogs />
      </Suspense>
    </LayoutBlog>
  );
};

export default BlogPage;
