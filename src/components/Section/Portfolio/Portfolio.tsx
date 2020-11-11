import React from 'react';

import './Portfolio.css';

interface IProps {
  refPortfolio: React.RefObject<HTMLElement>;
}

const data = [
  {
    name: '',
    description: '',
    stack: ['React'],
    linkDemo: '',
    source: '',
    image: '',
  },
];

export default function Portfolio(props: IProps) {
  return (
    <section className='Portfolio container' ref={props.refPortfolio}>
      <h2 className='Portfolio__title'>Portfolio</h2>
    </section>
  );
}
