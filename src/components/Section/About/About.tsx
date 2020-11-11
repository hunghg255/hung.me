import React from 'react';

import './About.css';

interface IProps {
  refAbout: React.RefObject<HTMLElement>;
}

export default function About(props: IProps) {
  return (
    <section className='About container' ref={props.refAbout}>
      <h2 className='About__title'>About me</h2>
      <h3>Nếu ban muốn biết tôi là ai...</h3>

      <p></p>
    </section>
  );
}
