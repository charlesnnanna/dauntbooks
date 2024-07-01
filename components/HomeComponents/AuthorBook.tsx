import Image from "next/image";
import React from "react";
import HomeList from "./HomeList";

interface AuthorBookProps {
  title: string;
  description: string;
  pages: string;
  length: string;
  imagesrc: string;
}
export default function AuthorBook(props: AuthorBookProps) {
  return (
    <div className="min-w-[10vw] border border-black text-primary flex flex-col md:flex-row md:gap-[10px] justify-center">
      <div className="lg:w-[40vw] lg:h-[400px] h-[200px] w-[30vw] relative">
        <Image
          className="border border-black"
          src={props.imagesrc}
          layout="fill"
          alt="first book"
        />
      </div>

      <div className="py-[5px] lg:px-[20px] lg:py-[40px] border border-black">
        <h2 className="text-2xl">{props.title}</h2>
        <div className="h-[14px] hidden md:block" />
        <p className="text-sm text-black/40 leading-relaxed">
          {props.description}
        </p>
        <div className="h-[30px] hidden md:block" />
        <ul className="flex flex-row gap-6">
          <HomeList title="Pages" value={props.pages} />
          <HomeList title="Length" value={props.length} />
        </ul>
        <div className="h-[30px] hidden md:block" />

        <button className="border-2 border-secondary/40 text-center p-2 lg:w-[150px]">
          Order Today
        </button>
      </div>
    </div>
  );
}
