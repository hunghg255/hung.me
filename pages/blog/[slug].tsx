import { useRouter } from 'next/router';
import BlogDetail from 'src/components/BlogDetail/BlogDetail';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';
import { getBlogPosts, getBlogPostsDetail } from 'src/utils/contentful';

const BlogDetailPage = ({ blogDetail }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LayoutBlog>Loading...</LayoutBlog>;
  }

  return (
    <LayoutBlog>
      <BlogDetail blogDetail={blogDetail} />
    </LayoutBlog>
  );
};

export const getStaticPaths = async () => {
  const data = await getBlogPosts();

  const paths = data?.data?.map((blog) => {
    return `/blog/${blog.fields.slug}-${blog.sys.id}`;
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ locale, params }: any) {
  const slugArr = params?.slug?.split('-');
  const data = await getBlogPostsDetail(slugArr[slugArr?.length - 1] as string);

  return {
    props: {
      blogDetail: data,
    },
    revalidate: 30,
  };
}

export default BlogDetailPage;
