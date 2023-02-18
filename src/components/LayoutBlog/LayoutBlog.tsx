import React from 'react';

import styles from './index.module.scss';

const LayoutBlog = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.containerBlog}>{children}</div>;
};

export default LayoutBlog;
