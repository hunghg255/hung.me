import React from 'react';

import styles from './index.module.css';

interface IProps {
  refAbout: React.RefObject<HTMLElement>;
}

const STACK = [
  'HTML',
  'CSS',
  'Sass',
  'LESS',
  'Javascript',
  'Typescript',
  'Webpack',
  'Reactjs',
  'Nextjs',
  'Gatsbyjs',
  'Vuejs',
  'Nodejs',
  'Firebase',
  'Docker',
  'Nginx',
];

export default function About(props: IProps) {
  return (
    <section className='About container' ref={props.refAbout}>
      <div className={styles.aboutHeading}>
        <h2 className={styles.aboutTitle}>About me</h2>
        <h3 className={styles.aboutSubtitle}>
          if you&apos;re <span>wondering</span> who <span>I am...</span>
        </h3>
      </div>
      <div className={styles.aboutMe}>
        <p>
          Hi, my name is <span className={styles.hightLight}>Hung</span>,
          i&apos;m {new Date().getFullYear() - 1997} years old. I got a bachelor of Electronics
          Telecommunication Engineering at Ha Noi University of Science and
          Technology (2015 - 2020). Besides, i am really passionate about{' '}
          <span className={styles.hightLight}>Javascript</span> and{' '}
          <span className={styles.hightLight}>Web Development.</span>
        </p>

        <p>
          I started learning web programming in 2018. Before that, I had a
          background in C / C ++ programming so getting access to javascript is
          not difficult. I have been in love with javascript since I did not
          know it, I like it. I searched many different sources to learn about
          this language for example:{' '}
          <span>
            <a href='https://developer.mozilla.org/'>Developer mozilla</a>
          </span>
          ,{' '}
          <span>
            <a href='https://github.com/getify/You-Dont-Know-JS'>
              You Don&apos;t Know JS
            </a>
          </span>
          .... I also took some online courses like{' '}
          <span>
            <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/'>
              React The Complete Guide in Redux
            </a>
          </span>
          ...
        </p>

        <p>
          In December 2019, when school was almost done, I decided to do an
          internship at a company to experience what a real environment is like.
          I learned a lot from my boss and colleagues while working.
        </p>
        <p>
          I want to be a good person in the field that I have chosen so I tried
          a lot, worked hard.
        </p>
      </div>
      <div className={styles.aboutMeStack}>
        <h3>
          My current <span className={styles.hightLight}>stack</span> of{' '}
          <span className={styles.hightLight}>languages/technologies</span> is:
        </h3>
        <p>{STACK.join(' - ')}</p>
      </div>
    </section>
  );
}
