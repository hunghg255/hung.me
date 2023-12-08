import React, { useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import dayjs from 'dayjs';
import Image from 'next/image';

import styles from './index.module.scss';
import BlogTag from '../Blogs/BlogTag';
import { getBlogPostsDetail } from 'src/utils/contentful';

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

export const BlogDetailSkeleton = () => {
  return (
    <div className={styles.blogDetail}>
      <div className={styles.headers}>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
      </div>
      <div className='blogDetail'>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
        <p
          className='skeleton'
          style={{
            height: '20px',
            marginBottom: '10px',
          }}
        ></p>
      </div>
    </div>
  );
};

const BlogDetail = async ({ slug }: any) => {
  const blogDetail = await getBlogPostsDetail(slug as string);

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
