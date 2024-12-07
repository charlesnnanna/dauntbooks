import React from 'react';

interface TopicProps {
  numbering: string;
  topic: string;
}
export default function Topic(props: TopicProps) : JSX.Element{
  return (
    <div className="flex flex-col p-4 gap-10 bg-neutral rounded">
      <span className="border-0 border-transparent font-bold flex justify-center px-2 items-center rounded-full bg-secondary w-[40px] h-[40px] text-xl text-primary">
        {props.numbering}
      </span>

      <p className="text-primary font-bold text-left">{props.topic}</p>
    </div>
  );
}
