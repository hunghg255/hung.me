import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  return <div className='Wrapper'>{props.children}</div>;
}
