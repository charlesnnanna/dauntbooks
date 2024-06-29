"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AuthorBook from "./AuthorBook";
import "swiper/css";

export default function AuthorBooks() {
  return (
    <div className="bg-white md:py-[145px] py-[60px] lg:px-[10vw] px-[3vw] overflow-x-hidden">
      <header className="border flex items-center flex-col">
        <h2 className="border-secondary text-primary text-4xl">
          Author's Book Includes
        </h2>
        <div className="border border-secondary hidden lg:block lg:w-[40px] mt-[20px]" />
      </header>

      <div className="mt-[57px] hidden border border-black lg:flex lg:flex-row w-full">
        <AuthorBook
          title="Atomic One's"
          description="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
          pages="121 pages"
          length="20 hours"
          imagesrc="images/book1.svg"
        />

        <AuthorBook
          title="The Dark Light"
          description="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
          pages="121 pages"
          length="20 hours"
          imagesrc="/images/book2.svg"
        />
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <AuthorBook
            title="Atomic One's"
            description="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
            pages="121 pages"
            length="20 hours"
            imagesrc="images/book1.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <AuthorBook
            title="The Dark Light"
            description="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
            pages="121 pages"
            length="20 hours"
            imagesrc="/images/book2.svg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
