import Image from 'next/image';
import React from 'react';
import Sparkles from 'src/components/UI/Sparkles/Sparkles';

import styles from './index.module.css';

interface IProps {
  refPortfolio: React.RefObject<HTMLElement>;
  portfolioImg: any;
}

const PROJECTS = [
  {
    name: 'Javascript question',
    description: 'Build a site js question',
    stack: 'Nextjs, markdown',
    linkDemo: 'https://js-qna.vercel.app/vi',
    source: 'https://github.com/hunghg255/js-qna',
    image: '/images/projects/js-qna.png',
  },
  {
    name: 'EvoGym UI',
    description: 'Build UI gym',
    stack: 'Reactjs, Vite, Tailwindcss',
    linkDemo: 'https://gym-ui.vercel.app/',
    source: 'https://github.com/hunghg255/gym-ui',
    image: '/images/projects/gym-ui.png',
  },
  {
    name: 'Short URL',
    description: 'Build a short url site',
    stack: 'Reactjs, Firebase',
    linkDemo: 'https://url8.vercel.app/',
    source: 'https://github.com/hunghg255/gym-ui',
    image: '/images/projects/short-url.png',
  },
  {
    name: 'Get Address no Google API',
    description: 'Build get address no google api',
    stack: 'Reactjs, Vite, Tailwindcss',
    linkDemo: 'https://address-vn-none-api.vercel.app/',
    source: 'https://github.com/hunghg255/address-vn-none-api',
    image: '/images/projects/address-vn-no-api.png',
  },
  {
    name: 'Warehouse',
    description: 'Build UI',
    stack: 'Reactjs - Taiwindcss',
    linkDemo: 'https://warehouse-blue.vercel.app/',
    source: 'https://github.com/hunghg255/warehouse/tree/main',
    image: '/images/projects/warehouse.png',
  },
  {
    name: 'Todoapp MERN',
    description: 'Build todoapp MERN stack',
    stack: 'Reactjs - redux - Typescript - mongodb - nodejs',
    linkDemo: '',
    source: 'https://github.com/hunghg255/Todo-mern',
    image: '/images/projects/todoMERN.png',
  },
  {
    name: 'Auth firebase',
    description: 'A basic auth use firebase',
    stack: 'Reactjs - ReactBootstrap - Firebase ',
    linkDemo: 'https://auth-react-firebase-cf412.web.app/',
    source: 'https://github.com/hunghg255/react-auth-firebase',
    image: '/images/projects/authFirebase.png',
  },
  {
    name: 'Movies trailer',
    description:
      'A movie trailer made reactjs. This project fetches data from an API when the user searches for a Movie.',
    stack: 'Reactjs',
    linkDemo: 'https://movies-api-cabb4.web.app/',
    source: 'https://github.com/hunghg255/movies_api_reactjs',
    image: '/images/projects/movies.png',
  },
  {
    name: 'Facebook clone',
    description: 'A facebook clone made with nextjs',
    stack: 'Nextjs, Firebase, Tailwindcss',
    linkDemo: '',
    source: 'https://github.com/hunghg255/fb-clone',
    image: '/images/projects/fbclone.png',
  },
  {
    name: 'Youtube UI clone',
    description: 'A youtube UI clone made with reactjs',
    stack: 'Reactjs',
    linkDemo: 'https://youtube-ui-clone-gamma.vercel.app/',
    source: 'https://github.com/hunghg255/youtube-ui-clone',
    image: '/images/projects/ytClone.png',
  },
  {
    name: 'Codepen clone',
    description: 'A Codepen clone made with reactjs',
    stack: 'Reactjs',
    linkDemo: 'https://codepenclone.vercel.app',
    source: 'https://github.com/hunghg255/reactjs-codepen',
    image: '/images/projects/codepenclone.png',
  },
  {
    name: 'Weather App',
    description: 'Build a weather App with reactjs',
    stack: 'Reactjs, Redux, Tailwindcss',
    linkDemo: 'https://react-weather-ts-omega.vercel.app/',
    source: 'https://github.com/hunghg255/react-weather-ts',
    image: '/images/projects/weatherApp.png',
  },
  {
    name: 'Madies clone',
    description:
      "I did clone this site from <a href='https://madies.mx/' rel=\"noreferrer\">Madies</a>. I don't use library animation.",
    stack: 'HTML - CSS - JAVASCRIPT',
    linkDemo: 'https://hunghg255.github.io/madies-clone/',
    source: 'https://github.com/hunghg255/madies-clone',
    image: '/images/projects/madies.png',
  },
  {
    name: 'Vanilla Shuffle Image',
    description: 'A library to shuffle an array of images.',
    stack: 'HTML - CSS - JAVASCRIPT',
    linkDemo: 'https://hoainam12k.github.io/vanilla-shuffe-images/dist/',
    source: 'https://github.com/hunghg255/vanilla-shuffe-images',
    image: '/images/projects/shuffleImage.png',
  },
];

const PACKAGES = [
  {
    id: 1,
    name: 'mega-menu-aim',
    description: `A simple menu like be Amazone's menu`,
    npmUrl: 'https://www.npmjs.com/package/mega-menu-aim',
    githubUrl: 'https://github.com/hunghg255/menu-mega-aim',
    demoUrl: 'https://hunghg255.github.io/menu-mega-aim/demo/index.html',
  },
  {
    id: 2,
    name: 'toastjs-tiny',
    description: `A simple library to notification`,
    npmUrl: 'https://www.npmjs.com/package/toastjs-tiny',
    githubUrl: 'https://github.com/hunghg255/toast',
    demoUrl: 'https://hunghg255.github.io/toast/demo/index.html',
  },
  {
    id: 3,
    name: 'introh-js',
    description: `A simple library to intro page`,
    npmUrl: 'https://www.npmjs.com/package/introh-js',
    githubUrl: 'https://github.com/hunghg255/intro-js',
    demoUrl: 'https://hunghg255.github.io/intro-js/demo/index.html',
  },
  {
    id: 4,
    name: 'number-2-text-vietnamese',
    description: `A library convert text to Vietnamese`,
    npmUrl: 'https://www.npmjs.com/package/number-2-text-vietnamese',
    githubUrl: 'https://github.com/hunghg255/number-2-text-vietnamese',
    demoUrl:
      'https://hunghg255.github.io/number-2-text-vietnamese/demo/index.html',
  },
  {
    id: 5,
    name: 'Effect ripple',
    description: `A script to do the effect ripple`,
    npmUrl: 'https://github.com/hunghg255/btn-ripple',
    githubUrl: 'https://github.com/hunghg255/btn-ripple',
    demoUrl: 'https://hunghg255.github.io/btn-ripple/',
  },
];

export default function Portfolio(props: IProps) {
  const { portfolioImg } = props;

  return (
    <>
      <section className='Portfolio container' ref={props.refPortfolio}>
        <h2 className={styles.portfolioTitle}>
          <Sparkles>My Packages</Sparkles>
        </h2>
        <div className={styles.packages}>
          <ul>
            {PACKAGES.map((it: any) => {
              return (
                <li key={it.id}>
                  <p className={styles.packageName}>{it.name}</p>
                  <p className={styles.packageDesc}>{it.description}</p>
                  <p className={styles.itemView}>
                    <a
                      href={it.npmUrl || '/'}
                      target='_blank'
                      rel='noreferrer'
                      className={styles.linkBorder}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 48 48'
                        width='48px'
                        height='48px'
                      >
                        <path fill='#d50000' d='M0,15h48v17H24v3H13v-3H0V15z' />
                        <path
                          fill='#fff'
                          d='M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z'
                        />
                      </svg>
                      Npm
                    </a>
                    <a
                      href={it.githubUrl || '/'}
                      target='_blank'
                      rel='noreferrer'
                      className={styles.linkBorder}
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fab'
                        data-icon='github'
                        className='svg-inline--fa fa-github fa-w-16 portfolioItem__StyledIcon-sc-1n9h1q1-7 fUtfwQ'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 496 512'
                      >
                        <path
                          fill='currentColor'
                          d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                        />
                      </svg>
                      Source
                    </a>
                    <a
                      href={it.demoUrl || '/'}
                      target='_blank'
                      rel='noreferrer'
                      className={styles.linkBorder}
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='link'
                        className='svg-inline--fa fa-link fa-w-16 portfolioItem__StyledIcon-sc-1n9h1q1-7 fUtfwQ'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z'
                        />
                      </svg>
                      Visit
                    </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className='Portfolio container' ref={props.refPortfolio}>
        <h2 className={styles.portfolioTitle}>
          <Sparkles>My Projects</Sparkles>
        </h2>
        <div className={styles.project}>
          <ul>
            {PROJECTS.map((item, idx) => (
              <li key={idx.toString()} className={styles.projectItem}>
                <div className='Project__item__wrapper'>
                  <div className={styles.projectItemImage}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={357}
                      height={202}
                      objectFit='cover'
                      // placeholder='blur'
                      // blurDataURL={portfolioImg[idx]?.base64}
                      priority={true}
                    />
                  </div>
                  <div className={styles.projectItemInfo}>
                    <h3>
                      <span>{item.name}</span>
                    </h3>
                    <p
                      className={styles.itemInfo}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <p className={styles.itemStack}>{item.stack}</p>
                    <p className={styles.itemView}>
                      <a
                        href={item.linkDemo || '/'}
                        target='_blank'
                        rel='noreferrer'
                        className={styles.linkHighlight}
                      >
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='link'
                          className='svg-inline--fa fa-link fa-w-16 portfolioItem__StyledIcon-sc-1n9h1q1-7 fUtfwQ'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z'
                          />
                        </svg>
                        Visit
                      </a>
                      <a
                        href={item.source || '/'}
                        target='_blank'
                        rel='noreferrer'
                        className={styles.linkBorder}
                      >
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fab'
                          data-icon='github'
                          className='svg-inline--fa fa-github fa-w-16 portfolioItem__StyledIcon-sc-1n9h1q1-7 fUtfwQ'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 496 512'
                        >
                          <path
                            fill='currentColor'
                            d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                          />
                        </svg>
                        Source
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
