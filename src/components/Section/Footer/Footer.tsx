/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import ImgFooter1 from '../../../Image/logo-footer1.png';
import ImgFooter2 from '../../../Image/logo-footer2.png';

import './Footer.css';

type TProps = {
  toggle: boolean;
}

function Footer(props: TProps) {
  const { toggle } = props;

  return (
    <footer className='container Footer'>
      <img src={toggle ? ImgFooter2 : ImgFooter1} alt='' />
      <p>Copyright &copy; {new Date().getFullYear()}, HGH</p>
    </footer>
  );
}

export default React.memo(Footer);
