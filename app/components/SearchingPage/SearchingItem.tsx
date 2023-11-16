"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SearchingItem = (key: any, src: string) => {
  return (
    <>
      <div className="flex flex-row w-full h-20 items-center bg-neutral-700">
        <div className="relative w-2/5 h-full rounded-sm">
          <Image
            src={src}
            alt={"search"}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-row w-3/5 justify-between items-center pl-5 pr-3">
          <div className=" h-8 text-white text-base font-normal">
            Some title
          </div>
          <Image
            src={"/images/play-btn.svg"}
            alt={"delete"}
            width={28}
            height={28}
          />
        </div>
      </div>
    </>
  );
};
export default SearchingItem;
