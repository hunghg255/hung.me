import React from 'react';

import styles from './index.module.scss';

const BlogTag = ({ tags }: { tags: any[] }) => {
  return (
    <div className={styles.tags}>
      {tags?.map((tagItem, idx) => {
        return (
          <div key={idx} className={`blogTag ${styles.tagItem} ${styles[tagItem?.sys?.id]}`}>
            {tagItem?.sys?.id}
          </div>
        );
      })}
    </div>
  );
};

export default BlogTag;
