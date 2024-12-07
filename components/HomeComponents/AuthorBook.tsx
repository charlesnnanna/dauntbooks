import Image from 'next/image';
import React from 'react';
import { truncateText } from '@utils/helperFunctions';
import HomeList from '@components/HomeComponents/HomeList';

interface AuthorBookProps {
  title: string;
  description: string;
  pages: string;
  length: string;
  imagesrc: string;
}
export default function AuthorBook(props: AuthorBookProps) : JSX.Element {
  return (
    <div className="min-w-[10vw] text-primary flex flex-col md:flex-row md:gap-[10px] justify-center py-2 shadow-2xl lg:shadow-none">
      <div className="lg:w-[40vw] lg:h-[400px] h-[200px] md:w-[30vw] relative">
        <Image
          className=""
          src={props.imagesrc}
          layout="fill"
          alt="first book"
        />
      </div>

      <div className="py-[5px] lg:px-[20px] lg:py-[40px] px-7">
        <h2 className="xs:text-xl md:text-2xl">
          {truncateText(props.title, 10)}
        </h2>
        <div className="md:h-[14px] h-[10px]" />
        <p className="text-sm text-black/40 leading-relaxed w-full overflow-hidden">
          {truncateText(props.description, 50)}
        </p>
        <div className="h-[10px] md:h-[30px]" />
        <ul className="flex flex-row gap-6">
          <HomeList title="Pages" value={props.pages} />
          <HomeList title="Length" value={props.length} />
        </ul>
        <div className="md:h-[30px] h-[10px]" />

        <button className="border-2 border-secondary/40 w-full text-center p-2 lg:w-[150px]">
          Order Today
        </button>
      </div>
    </div>
  );
}
