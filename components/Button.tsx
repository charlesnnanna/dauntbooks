import React from 'react';

interface ButtonProps {
  style: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <>
      <button className={` py-2 w-[150px] ${props.style}`}>Order Today</button>
    </>
  );
}
