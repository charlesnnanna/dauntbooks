"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AuthorBook from "./AuthorBook";
import "swiper/css";
import SectionHeader from "../SectionHeader";

export default function AuthorBooks() {
  return (
    <div className="bg-white md:py-[145px] py-[60px] lg:px-[10vw] px-[3vw]  w-full">
      <SectionHeader position="items-center" title="Author's Book Includes" />

      <div className=" mt-[20px] lg:mt-[57px] w-full">
        <Swiper
          //spaceBetween={50}
          //slidesPerView={1}
          //centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1600: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <AuthorBook
              title="Atomic One's"
              description="Many variations of passages of Lorem Ipsum willing araise  alteration in some form.Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
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
    </div>
  );
}
