import React, { useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import dayjs from 'dayjs';
import Image from 'next/image';

import styles from './index.module.scss';
import BlogTag from '../Blogs/BlogTag';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const isImage = node?.data?.target?.fields?.file?.contentType?.includes('image');
      if (isImage) {
        return (
          <div className='img'>
            <Image
              src={'https:' + node?.data?.target?.fields?.file?.url}
              width={node?.data?.target?.fields?.file?.details?.image?.width}
              height={node?.data?.target?.fields?.file?.details?.image?.height}
              alt=''
              className='object-contain'
            />
          </div>
        );
      }
      return <></>;
    },
  },
  renderText: (text) => text.replace('!', '?'),
};

const BlogDetail = (props: any) => {
  const [blogDetail] = useState<any>(props?.blogDetail);

  // useEffect(() => {
  //   (async () => {
  //     const slugArr = (router.query?.slug as string)?.split('-');

  //     const data = await getBlogPostsDetail(slugArr[slugArr?.length - 1] as string);
  //     setblogDetail(data);
  //   })();
  // }, [router.query?.slug]);

  if (!blogDetail) {
    return <></>;
  }

  return (
    <div className={styles.blogDetail}>
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
    </div>
  );
};

export default BlogDetail;
