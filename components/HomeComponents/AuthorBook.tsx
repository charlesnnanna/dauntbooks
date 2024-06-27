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
    <div className="border border-navyblue text-navyblue flex flex-row gap-[10px]">
      <Image src={props.imagesrc} alt="first book" width={300} height={500} />

      <div className="border border-navyblue py-[40px]">
        <h2 className="text-2xl">{props.title}</h2>
        <p className="py-3 text-sm text-slate-700 opacity-50 leading-loose">
          {props.description}
        </p>
        <ul className="flex flex-row gap-10">
          <HomeList title="Pages" value={props.pages} />
          <HomeList title="Length" value={props.length} />
        </ul>

        <button>Order Today</button>
      </div>
    </div>
  );
}
