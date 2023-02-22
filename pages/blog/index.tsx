import Head from 'next/head';
import Blogs from 'src/components/Blogs/Blogs';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';
import { getBlogPosts } from 'src/utils/contentful';

const BlogPage = ({ blogs }: any) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <LayoutBlog>
        <Blogs blogs={blogs} />
      </LayoutBlog>
    </>
  );
};

export async function getStaticProps(context) {
  const data = await getBlogPosts();

  return {
    props: {
      blogs: data,
    }, // will be passed to the page component as props
    revalidate: 30,
  };
}

export default BlogPage;
