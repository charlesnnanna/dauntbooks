import React from 'react';

interface SectionHeaderProps {
  title: string;
  style: string;
}

export default function SectionHeader(props: SectionHeaderProps): JSX.Element {
  return (
    <header className={`flex ${props.style} flex-col w-full`}>
      <h2 className={`border-secondary text-4xl`}>{props.title}</h2>
      <div className="border border-secondary block w-[10vw] lg:w-[40px] mt-[20px] " />
    </header>
  );
}
