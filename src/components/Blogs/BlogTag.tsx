import React from 'react';

import styles from './index.module.scss';

const BlogTag = ({ tags }: { tags: any[] }) => {
  if (!tags?.length) return null;

  return (
    <div className={styles.tags}>
      {tags?.map((tagItem, idx) => {
        return (
          <div
            key={idx}
            className={`blogTag ${styles.tagItem} ${styles[tagItem?.sys?.id?.toLowerCase()]}`}
          >
            {tagItem?.sys?.id}
          </div>
        );
      })}
    </div>
  );
};

export default BlogTag;
