'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import BlogTag from './BlogTag';
import styles from './index.module.scss';
import { getBlogWebTotal } from 'src/utils/web-total';
import { BlurImage } from 'src/components/UI/BlurImage/BlurImage';

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
  const [blogsWebtotal] = await Promise.all([getBlogWebTotal()]);

  return (
    <>
      <h1 className={styles.title1}>Blogs</h1>

      <div className={styles.listBlog}>
        {blogsWebtotal.map((blog, idx) => {
          const tags = blog.category?.length
            ? blog.category.map((it) => {
                return {
                  sys: {
                    id: it._text,
                  },
                };
              })
            : [];
          if (
            !blog.link._text.includes('blogs') ||
            blog.link._text === 'https://web-totals.vercel.app/blogs/blog'
          )
            return <></>;

          return (
            <div key={`blog-webtotal-${idx}`} className={styles.blogItem}>
              <Link target='_blank' href={blog.link._text}>
                <div className={styles.img}>
                  <BlurImage
                    src={blog?.enclosure?._attributes?.url || '/images/projects/default.png'}
                    alt=''
                    fill
                    className='object-contain'
                  />
                </div>
                <div className={styles.content}>
                  <h2>{blog.title._cdata}</h2>
                  <p className={styles.date}>
                    Publish date: {dayjs(blog.pubDate._text).format('DD MMM YYYY')}
                  </p>
                  <BlogTag tags={tags} />
                </div>
              </Link>
            </div>
          );
        })}

        {/* {blogs.data.map((blog) => {
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
        })} */}
      </div>
    </>
  );
};

export default Blogs;
