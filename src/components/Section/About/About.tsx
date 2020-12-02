/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './About.css';

interface IProps {
  refAbout: React.RefObject<HTMLElement>;
}

export default function About(props: IProps) {
  return (
    <section className='About container' ref={props.refAbout}>
      <div className='About__heading'>
        <h2 className='About__title'>About me</h2>
        <h3 className='About__subtitle'>if you're <span>wondering</span> who <span>I am...</span></h3>
      </div>
      <div className='About__me'>
        <p>I'm <span className='hight-light'>Hung</span>, a 23 year old, from <span className='hight-light'>Viet Nam</span></p>
      </div>
    </section>
  );
}
