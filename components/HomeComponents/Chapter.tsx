import React from 'react';
import HomeList from '@components/HomeComponents/HomeList.tsx';

export default function Chapter(): JSX.Element {
  return (
    <div className="max-w-[700px] border border-black p-6 shadow-xl">
      <h3 className="text-xl mb-4">Chapter-01 Get Started Intro</h3>
      <p className="mb-2">
        Making this the first true value generator on the Internet. It of over
        200 Latin words, combined with a handful.
      </p>
      <div className="flex flex-row">
        <HomeList title="Pages" value="185 pages" />
        <HomeList title="Lenght" value="1 hour 16 mins" />
      </div>
    </div>
  );
}
