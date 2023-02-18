import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getBlogPosts, IDataBlogs } from 'src/utils/contentful';
import BlogTag from './BlogTag';

import styles from './index.module.scss';

const Blogs = () => {
  const [blogs, setblogs] = useState<IDataBlogs>();

  useEffect(() => {
    (async () => {
      const data = await getBlogPosts();
      console.log(data);
      setblogs(data);
    })();
  }, []);

  if (!blogs?.data?.length) return null;
  console.log({ blogs });

  return (
    <div className={styles.listBlog}>
      {blogs.data.map((blog) => {
        return (
          <div key={blog.fields.slug} className={styles.blogItem}>
            <Link href={`/blog/${blog.fields.slug}-${blog.sys.id}`} passHref>
              <a>
                <div className={styles.img}>
                  {blog?.fields?.thumbnail?.fields?.file?.url && (
                    <Image
                      src={'https:' + blog?.fields?.thumbnail?.fields?.file?.url}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                    />
                  )}
                </div>
                <div className={styles.content}>
                  <h2>{blog.fields.title}</h2>
                  <p>Date: {dayjs(blog.fields.publishedDate).format('DD MMM YYYY')}</p>
                  <BlogTag tags={blog.metadata.tags} />
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
