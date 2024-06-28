"use client";

import React from "react";
import AuthorBook from "./AuthorBook";

export default function AuthorBooks() {
  return (
    <div className="bg-white md:py-[145px] md:px-[180px]">
      <header className="border flex items-center flex-col">
        <h2 className="border-secondary text-primary text-4xl">
          Author's Book Includes
        </h2>
        <div className="border border-secondary w-[40px] mt-[20px]" />
      </header>

      <div className="mt-[57px] flex flex-row gap-[66px]">
        <AuthorBook
          title="Atomic One's"
          description="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
          pages="121 pages"
          length="20 hours"
          imagesrc="/images/book1.svg"
        />

        <AuthorBook
          title="The Dark Light"
          description="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
          pages="121 pages"
          length="20 hours"
          imagesrc="/images/book2.svg"
        />
      </div>
    </div>
  );
}
