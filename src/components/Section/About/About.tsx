/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Sparkles from 'src/components/UI/Sparkles/Sparkles';

import styles from './index.module.scss';

export default function About() {
  return (
    <section className='About container' id='sectionAbout'>
      <div className={styles.aboutHeading} data-aos='fade-up'>
        <h2 className={styles.aboutTitle}>
          <Sparkles>About me</Sparkles>
        </h2>

        <h3 className={styles.aboutSubtitle}>
          if you&apos;re <span>wondering</span> who <span>I am...</span>
        </h3>
      </div>
      <div className={styles.aboutMe} data-aos='fade-up'>
        <p>
          Hi, my name is <span className={styles.hightLight}>Hung</span>, i&apos;m{' '}
          {new Date().getFullYear() - 1997} years old. I got a bachelor of Electronics
          Telecommunication Engineering at Ha Noi University of Science and Technology (2015 -
          2020). Besides, i am really passionate about{' '}
          <span className={styles.hightLight}>Javascript</span> and{' '}
          <span className={styles.hightLight}>Web Development.</span>
        </p>

        <p>
          I started learning web programming in 2018. Before that, I had a background in C / C ++
          programming so getting access to javascript is not difficult. I have been in love with
          javascript since I did not know it, I like it. I searched many different sources to learn
          about this language for example:{' '}
          <span>
            <a href='https://developer.mozilla.org/'>Developer mozilla</a>
          </span>
          ,{' '}
          <span>
            <a href='https://github.com/getify/You-Dont-Know-JS'>You Don&apos;t Know JS</a>
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
          In December 2019, when school was almost done, I decided to do an internship at a company
          to experience what a real environment is like. I learned a lot from my boss and colleagues
          while working.
        </p>
        <p>
          I want to be a good person in the field that I have chosen so I tried a lot, worked hard.
        </p>
      </div>
      <div className={styles.aboutMeStack} data-aos='fade-up'>
        <h3>
          My current <span className={styles.hightLight}>stack</span>
          of <span className={styles.hightLight}>languages/technologies</span>
          is:
        </h3>
        <div>
          <img
            src='https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white'
            alt='HTML5'
          />
          <img
            src='https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white'
            alt='CSS3'
          />
          <img
            src='https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white'
            alt='SASS'
          />
          <img
            src='https://img.shields.io/badge/LESS-%230db7ed.svg?style=flat-square&logo=less&logoColor=white'
            alt='LESS'
          />
          <img
            src='https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white'
            alt='TailwindCSS'
          />
          <img
            src='https://img.shields.io/badge/AntDesign-1677ff.svg?style=flat-square&logo=ant-design&logoColor=white'
            alt='Antd'
          />
          <img
            src='https://img.shields.io/badge/Javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E'
            alt='Javascript'
          />
          <img
            src='https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white'
            alt='Typescript'
          />
          <img
            src='https://img.shields.io/badge/Reactjs-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB'
            alt='Reactjs'
          />
          <img
            src='https://img.shields.io/badge/Nextjs-black?style=flat-square&logo=next.js&logoColor=white'
            alt='Nextjs'
          />
          <img
            src='https://img.shields.io/badge/Remix-black?style=flat-square&logo=remix&logoColor=white'
            alt='Remix.run'
          />
          <img
            src='https://img.shields.io/badge/solidjs-4578bc?style=flat-square&logo=solid&logoColor=white'
            alt='Remix.run'
          />
          <img
            src='https://img.shields.io/badge/Vuejs-%2335495e.svg?style=flat-square&logo=vuedotjs&logoColor=%234FC08D'
            alt='Vuejs'
          />
          <img
            src='https://img.shields.io/badge/Svelte-ff3e00?style=flat-square&logo=svelte&logoColor=white'
            alt='Svelte'
          />
          <img
            src='https://img.shields.io/badge/Vitejs-blueviolet?style=flat-square&logo=vite&logoColor=white'
            alt='Vitejs'
          />
          <img
            src='https://img.shields.io/badge/Webpack-dodgerblue?style=flat-square&logo=webpack&logoColor=white'
            alt='Webpack'
          />

          <img
            src='https://img.shields.io/badge/Nodejs-6DA55F?style=flat-square&logo=node.js&logoColor=white'
            alt='Nodejs'
          />
          <img
            src='https://img.shields.io/badge/Expressjs-6DA55F?style=flat-square&logo=nestjs&logoColor=white'
            alt='Expressjs'
          />
          <img
            src='https://img.shields.io/badge/Firebase-%23039BE5.svg?style=flat-square&logo=firebase'
            alt='Firebase'
          />
          <img
            src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white'
            alt='MongoDB'
          />
          <img
            src='https://img.shields.io/badge/Docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white'
            alt='Docker'
          />
          <img
            src='https://img.shields.io/badge/Nginx-%234ea94b.svg?style=flat-square&logo=nginx&logoColor=white'
            alt='Nginx'
          />
          <img
            src='https://img.shields.io/badge/Git-%23E34F26.svg?style=flat-square&logo=git&logoColor=white'
            alt='Git'
          />
        </div>
      </div>

      {/* <div className={styles.aboutContribution}>
        <p className={styles.aboutContributionTitle}>Contributions in this years</p>
        <img src='https://ghchart.rshah.org/hunghg2505' alt='' />
      </div> */}
    </section>
  );
}
