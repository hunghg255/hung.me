import Head from 'next/head';

import Blogs from 'src/components/Blogs/Blogs';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';
import { getBlogPosts } from 'src/utils/contentful';

const BlogPage = ({ blogs }: any) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <link rel='canonical' href='https://hung.thedev.id/blog'></link>
      </Head>
      <LayoutBlog>
        <Blogs blogs={blogs} />
      </LayoutBlog>
    </>
  );
};

export async function getStaticProps() {
  const data = await getBlogPosts();

  return {
    props: {
      blogs: data,
    }, // will be passed to the page component as props
    revalidate: 30,
  };
}

export default BlogPage;
