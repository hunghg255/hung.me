import React from 'react';

import './ButtonBurger.css';

interface IPropsButtonBurger {
  isToggle: boolean;
  toggle: () => void;
}

export default function ButtonBurger(props: IPropsButtonBurger) {
  return (
    <div
      className={`btn__burger ${props.isToggle ? 'btn__burger--active' : ''}`}
      onClick={props.toggle}
    >
      <div className='btn__burger--line'></div>
      <div className='btn__burger--line'></div>
      <div className='btn__burger--line'></div>
    </div>
  );
}
