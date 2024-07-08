import React from "react";

interface SectionHeaderProps {
  title: string;
  position: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <header className={`flex ${props.position} flex-col w-full`}>
      <h2 className="border-secondary text-primary text-4xl">{props.title}</h2>
      <div className="border border-secondary block w-[10vw] lg:w-[40px] mt-[20px] " />
    </header>
  );
}
