import BlogDetail from 'src/components/BlogDetail/BlogDetail';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';

const BlogDetailPage = () => {
  return (
    <LayoutBlog>
      <BlogDetail />
    </LayoutBlog>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {},
  };
}

export default BlogDetailPage;
