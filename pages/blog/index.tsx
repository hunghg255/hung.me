import Head from 'next/head';
import Blogs from 'src/components/Blogs/Blogs';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <LayoutBlog>
        <Blogs />
      </LayoutBlog>
    </>
  );
};

export default BlogPage;
