import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import SingleStat from "./SingleStat";
export default function Stats() {
  // REDUX
  //const counter = useSelector((state) => state.counter)

  return (
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 lg:px-[10vw] px-[3vw] lg:py-20">
        <SectionHeader
          title="Trusted by the Best"
          style="items-center text-primary"
        />
        <dl className="mt-10 text-center sm:max-w-4xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-9 md:grid-cols-4 md:gap-9">
          <SingleStat
            imageSrc="images/stat1.svg"
            title="Amazon Corp"
            description="A long established fact that a who looking at its layout."
            alt="amazon_corp"
          />

          <SingleStat
            imageSrc="images/stat2.svg"
            title="Megan Books"
            description="A long established fact that a who looking at its layout."
            alt="megan_books"
          />

          <SingleStat
            imageSrc="images/stat3.svg"
            title="Los Books"
            description="A long established fact that a who looking at its layout."
            alt="los_books"
          />

          <SingleStat
            imageSrc="images/stat4.svg"
            title="Urban Lib"
            description="A long established fact that a who looking at its layout."
            alt="urban_lib"
          />
        </dl>
      </div>
    </div>
  );
}
