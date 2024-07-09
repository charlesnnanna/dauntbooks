import Image from "next/image";
import React from "react";
import SectionHeader from "../SectionHeader";
import Topic from "./Topic";

export default function WhatToLearn() {
  // REDUX
  //const counter = useSelector((state) => state.counter)

  return (
    <div className="flex flex-col gap-10 relative bg-white py-4 sm:py-12 lg:py-20 overflow-hidden">
      <div>
        <SectionHeader
          title="What will you learn"
          style="items-center text-primary"
        />
      </div>

      <div className="flex flex-row mx-auto max-w-md gap-10 px-4 py-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div className="grid px-4 gap-7 sm:max-w-4xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-9 md:grid-cols-2 md:gap-9">
          <Topic
            numbering="01"
            topic="Use HDFS & Map Reduce for storing & analyzing data at scale."
          />
          <Topic
            numbering="02"
            topic="Consume streaming data using Spark Streaming, Flink, and Storm."
          />
          <Topic
            numbering="03"
            topic="Choose an appropriate data storage technology for your application"
          />
          <Topic
            numbering="04"
            topic="Analyze non-relational data using HBase, Cassandra, and MongoDB."
          />
        </div>
        <div className="hidden md:block w-full h-[300px] sm:h-[400px] md:h-[500px] relative sm:self-center">
          <Image src="images/learn.svg" layout="fill" alt="author_picture" />
        </div>
      </div>
    </div>
  );
}
