import dynamic from 'next/dynamic';

import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';
import { getBlogPostsDetail } from 'src/utils/contentful';

const BlogDetail = dynamic(() => import('src/components/BlogDetail/BlogDetail'), {
  ssr: false,
});

export const revalidate = 30;

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const slugArr = params?.slug?.split('-');
  const data = await getBlogPostsDetail(slugArr[slugArr?.length - 1] as string);

  return (
    <>
      {/* <Head>
        <title>{blogDetail?.fields?.title}</title>
        <link rel='canonical' href='https://hung.thedev.id/blog'></link>
      </Head> */}
      <LayoutBlog>
        <BlogDetail blogDetail={data} />
      </LayoutBlog>
    </>
  );
};

export default BlogDetailPage;
