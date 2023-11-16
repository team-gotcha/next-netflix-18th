"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SearchingBar = () => {
  return (
    <>
      <div className="flex flex-row w-full h-14 justify-between items-center px-5 mt-14 bg-neutral-700">
        <Image
          src={"/images/search.svg"}
          alt={"search"}
          width={20}
          height={20}
        />
        <input
          placeholder="Search for a show, movie, genre, e.t.c."
          className="w-3/4 h-8 bg-transparent text-neutral-300 placeholder:text-neutral-300 focus:outline-none"
        />
        <Image
          src={"/images/delete.svg"}
          alt={"delete"}
          width={15}
          height={15}
        />
      </div>
    </>
  );
};
export default SearchingBar;
