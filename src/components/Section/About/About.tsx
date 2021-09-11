/* eslint-disable max-len */
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
        <p>Hi, my name is <span className='hight-light'>Hung</span>, i'm 24 years old. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020). Besides, i am really passionate about <span className='hight-light'>Javascript</span> and <span className='hight-light'>Web Development.</span></p>

        <p>I started learning web programming in 2018. Before that, I had a background in C / C ++ programming so getting access to javascript is not difficult. I have been in love with javascript since I did not know it, I like it. I searched many different sources to learn about this language for example: <span><a href="https://developer.mozilla.org/">Developer mozilla</a></span>, <span><a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS</a></span>.... I also took some online courses like <span><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">React The Complete Guide in Redux</a></span>...</p>

        <p>In December 2019, when school was almost done, I decided to do an internship at a company to experience what a real environment is like. I learned a lot from my boss and colleagues while working.</p>
        <p>I want to be a good person in the field that I have chosen so I tried a lot, worked hard.</p>
      </div>
      <div className="About__me About__me__Stack">
        <h3>My current <span className='hight-light'>stack</span> of <span className='hight-light'>languages/technologies</span> is:</h3>
        <p>HTML5 - CSS3 - JAVASCRIPT - TYPESCRIPT - SASS - WEBPACK - REACTJS - REDUX - CSS MODULES - GATSBYJS</p>
      </div>
    </section>
  );
}
