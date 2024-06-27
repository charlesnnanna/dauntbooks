import Image from "next/image";
import React from "react";

interface HomeListProps {
  title: string;
  value: string;
}

export default function HomeList(props: HomeListProps) {
  return (
    <>
      <li className="flex flex-row gap-2">
        <Image
          className="self-start pt-2"
          src="/images/bulletpoint.svg"
          alt="bulletpoint"
          width={10}
          height={10}
        />
        <p>
          {props.title}: <br />
          <span className="font-normal text-sm">{props.value}</span>
        </p>
      </li>
    </>
  );
}
