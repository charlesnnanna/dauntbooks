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
    <div className=" border border-black text-primary flex flex-row flex-wrap md:flex-nowrap gap-[0] lg:gap-[10px] justify-center">
      <Image
        className="w-10"
        src={props.imagesrc}
        layout="responsive"
        alt="first book"
        width={100}
        height={300}
      />

      <div className="py-[5px] px-[20px] lg:py-[40px]">
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
