import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getBlogPostsDetail } from 'src/utils/contentful';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import BlogTag from '../Blogs/BlogTag';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const isImage = node?.data?.target?.fields?.file?.contentType?.includes('image');
      if (isImage)
        return (
          <Image
            src={'https:' + node?.data?.target?.fields?.file?.url}
            width={node?.data?.target?.fields?.file?.details?.image?.width}
            height={node?.data?.target?.fields?.file?.details?.image?.height}
            alt=''
            objectFit='contain'
          />
        );
      return <></>;
    },
  },
  renderText: (text) => text.replace('!', '?'),
};

const BlogDetail = () => {
  const router = useRouter();
  const [blogDetail, setblogDetail] = useState<any>();

  useEffect(() => {
    (async () => {
      const slugArr = (router.query?.slug as string)?.split('-');

      const data = await getBlogPostsDetail(slugArr[slugArr?.length - 1] as string);
      setblogDetail(data);
    })();
  }, [router.query?.slug]);

  if (!blogDetail) return null;

  return (
    <>
      <Head>
        <title>{blogDetail?.fields?.title}</title>
      </Head>
      <div className={styles.headers}>
        <h1 className={styles.title}>{blogDetail?.fields?.title}</h1>
        <p className={styles.date}>
          Date: {dayjs(blogDetail?.fields?.publishedDate).format('DD MMM YYYY')}
        </p>
        <BlogTag tags={blogDetail?.metadata?.tags} />
      </div>
      <div className='blogDetail'>
        {documentToReactComponents(blogDetail?.fields?.body, options)}
      </div>
    </>
  );
};

export default BlogDetail;
