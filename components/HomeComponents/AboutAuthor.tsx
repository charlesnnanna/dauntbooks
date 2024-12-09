'use client';

import Image from 'next/image';
import React from 'react';
import QRCode from 'react-qr-code';
import AuthorStats from '@components/HomeComponents/AuthorStats';
import SectionHeader from '@components/SectionHeader';

export default function AboutAuthor(): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row bg-neutral md:py-[145px] py-[60px] lg:px-[10vw] px-[3vw]  w-full overflow-hidden">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative sm:self-center">
        <Image src="images/author.svg" layout="fill" alt="author_picture" />
      </div>
      <div className="hidden sm:block md:w-[100px] md:h-[30px]" />
      <div className="px-4 sm:w-[50vw]">
        <div className="h-[10px] md:h-[30px]" />
        <SectionHeader
          title="About Author"
          style="items-center md:items-start text-primary"
        />
        <div className="h-[10px] md:h-[30px]" />
        <p className="text-sm text-black/40 leading-relaxed w-full overflow-hidden ">
          All the Lorem Ipsum generators on the Internet tend to repeated
          predefined chunks as necessary, making this the first true value
          generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful.
        </p>
        <div className="h-[10px] md:h-[30px]" />
        <div className="flex flex-row gap-5">
          <AuthorStats statNumber="02" statDescription="Books Published" />
          <div className="self-center border border-secondary  h-[60px] md:h-[70px] md:h-[40px]" />
          <AuthorStats statNumber="4.5" statDescription="User Reviews" />
          <div className="self-center border border-secondary h-[60px] md:h-[70px]" />
          <AuthorStats statNumber="04" statDescription="Best Seller Awards" />
        </div>

        <div className="flex flex-row bg-primary p-2 justify-start gap-3  mt-[10px] max-w-[300px]">
          <div className="bg-white p-3">
            <QRCode
              size={100}
              style={{ height: '70', maxWidth: '100%', width: '100%' }}
              viewBox={`0 0 256 256`}
              value="John Abraham, Ph D, JohnAbraham@gmail.com, +2 123 545 9000"
            />
          </div>
          <div className="flex flex-col gap-2 text-xs justify-center">
            <span className="text-secondary font-bold">John Abraham, Ph D</span>
            <span className="font-thin text-xs">
              Mail: JohnAbraham@gmail.com
            </span>
            <span className="font-thin text-xs">Phone: +2 123 545 9000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
