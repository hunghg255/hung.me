'use client';

import { useState } from 'react';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { IDataBlogs } from 'src/utils/contentful';

import BlogTag from './BlogTag';
import styles from './index.module.scss';

const Blogs = (props: any) => {
  const [blogs] = useState<IDataBlogs>(props?.blogs);

  if (!blogs?.data?.length) {
    return <></>;
  }

  return (
    <>
      <h1 className={styles.title1}>Blogs</h1>

      <div className={styles.listBlog}>
        {blogs.data.map((blog) => {
          return (
            <div key={blog.fields.slug} className={styles.blogItem}>
              <Link href={`/blog/${blog.fields.slug}-${blog.sys.id}`}>
                <div className={styles.img}>
                  {blog?.fields?.thumbnail?.fields?.file?.url && (
                    <Image
                      src={'https:' + blog?.fields?.thumbnail?.fields?.file?.url}
                      alt=''
                      fill
                      className='object-contain'
                    />
                  )}
                </div>
                <div className={styles.content}>
                  <h2>{blog.fields.title}</h2>
                  <p className={styles.date}>
                    Date: {dayjs(blog.fields.publishedDate).format('DD MMM YYYY')}
                  </p>
                  <BlogTag tags={blog.metadata.tags} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
