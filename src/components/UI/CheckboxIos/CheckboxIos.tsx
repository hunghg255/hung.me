import React from 'react';

import './CheckboxIos.css';

interface IProps {
  handleToggle: () => void;
  id: number;
  isChecked: boolean;
}

export default function CheckboxIos(props: IProps) {
  const refCb = React.useRef<HTMLInputElement>(null);
  const { id, handleToggle, isChecked } = props;

  React.useEffect(() => {
    if (isChecked) {
      if (refCb && refCb.current) {
        refCb.current.checked = true;
      }
      return;
    }
    if (refCb && refCb.current) {
      refCb.current.checked = false;
    }
  }, [isChecked]);

  return (
    <div className='CheckboxIos'>
      <input
        type='checkbox'
        ref={refCb}
        id={`cbios-${id}`}
        className='cbios'
        onChange={handleToggle}
      />
      <label htmlFor={`cbios-${id}`} className='cbios__label'>
        <span className='btn__toggle-circle'>
          <span className='btn__circle circle1'></span>
          <span className='btn__circle circle2'></span>
          <span className='btn__circle circle3'></span>
        </span>

        <span className='btn__toggle-star star1'></span>
        <span className='btn__toggle-star star2'></span>
        <span className='btn__toggle-star star3'></span>
        <span className='btn__toggle-star star4'></span>
        <span className='btn__toggle-star star5'></span>
      </label>
    </div>
  );
}
