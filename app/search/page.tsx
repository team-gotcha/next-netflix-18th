"use client";
import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import SearchingBar from "../components/SearchingPage/SearchingBar";
import SearchingItem from "../components/SearchingPage/SearchingItem";

export default function Search() {
  return (
    <div className="flex flex-col w-full h-screen items-start max-w-[450px] ">
      <SearchingBar />
      <div className="text-white text-2xl font-bold my-5">Top Searches</div>

      <SearchingItem />
      <NavBar />
    </div>
  );
}
