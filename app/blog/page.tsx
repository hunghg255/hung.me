import Blogs from 'src/components/Blogs/Blogs';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';
import { getBlogPosts } from 'src/utils/contentful';

export const revalidate = 30;

const BlogPage = async () => {
  const data = await getBlogPosts();

  return (
    <>
      {/* <Head>
        <title>Blogs</title>
        <link rel='canonical' href='https://hung.thedev.id/blog'></link>
        <meta property='og:url' content='https://hung.thedev.id/blog' />
      </Head> */}
      <LayoutBlog>
        <Blogs blogs={data} />
      </LayoutBlog>
    </>
  );
};

export default BlogPage;
