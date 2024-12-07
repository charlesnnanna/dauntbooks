import Image from 'next/image';
import React from 'react';

interface HomeListProps {
  title: string;
  value: string;
}

export default function HomeList(props: HomeListProps): JSX.Element {
  return (
    <>
      <li className="flex flex-row gap-2">
        <Image
          className="self-start pt-2 w-2 md:w-4"
          src="/images/bulletpoint.svg"
          alt="bulletpoint"
          width={15}
          height={15}
        />
        <p className="font-bold text-xs">
          {props.title}: <br />
          <span className="font-normal text-xs lg:text-sm">{props.value}</span>
        </p>
      </li>
    </>
  );
}
