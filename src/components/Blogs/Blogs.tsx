'use client';

import { useState } from 'react';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { IDataBlogs, getBlogPosts } from 'src/utils/contentful';

import BlogTag from './BlogTag';
import styles from './index.module.scss';

export const BlogsSkeleton = () => {
  return (
    <>
      <h1 className={styles.title1}>Blogs</h1>

      <div className={styles.listBlog}>
        {[...Array(3)].map((_, i) => {
          return (
            <div key={i} className={styles.blogItem}>
              <Link href={`/`}>
                <div className={`${styles.img} skeleton`}></div>
                <div className={styles.content}>
                  <h2
                    className='skeleton'
                    style={{
                      height: '20px',
                      marginBottom: '10px',
                    }}
                  ></h2>
                  <p
                    className={'skeleton'}
                    style={{
                      height: '20px',
                    }}
                  ></p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Blogs = async () => {
  const blogs = await getBlogPosts();

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
