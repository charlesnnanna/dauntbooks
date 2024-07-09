import Image from "next/image";
import React from "react";

interface SingleStatProps {
  imageSrc: string;
  title: string;
  description: string;
  alt: string;
}

export default function SingleStat(props: SingleStatProps) {
  return (
    <div className="flex flex-col mt-10 sm:mt-0 gap-2">
      <dt className="mt-2 text-lg leading-6 font-medium text-indigo-200 flex flex-col gap-4">
        <div className="w-[60vw] h-[100px] sm:w-[100px] relative mx-auto">
          <Image src={props.imageSrc} layout="fill" alt={props.alt} />
        </div>
        <p className="text-primary font-bold">{props.title}</p>
      </dt>
      <dd className="text-sm text-black/40 leading-relaxed">
        {props.description}
      </dd>
    </div>
  );
}
