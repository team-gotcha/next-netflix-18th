"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { getSearchResults, getImageUrl } from "../../api/movieApi";

import NavBar from "../components/NavBar";
import SearchingItem from "../components/SearchingPage/SearchingItem";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useQuery(
    ["search", { query: inputValue }],
    () => getSearchResults(inputValue),
    {
      enabled: inputValue !== "",
    }
  );

  return (
    <div className="flex flex-col w-full h-screen items-start max-w-[450px] scrollbar-none">
      <div className="flex flex-row w-full h-[52px] justify-between items-center px-5 mt-14 bg-neutral-700">
        <Image
          src={"/images/search.svg"}
          alt={"search"}
          width={20}
          height={20}
        />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for a show, movie, genre, e.t.c."
          className="w-3/4 h-8 bg-transparent text-neutral-300 placeholder:text-neutral-300 focus:outline-none"
        />
        <Image
          src={"/images/delete.svg"}
          alt={"delete"}
          width={15}
          height={15}
          onClick={() => setInputValue("")}
        />
      </div>
      <div className="text-white text-2xl font-bold my-5">Top Searches</div>

      <div className="flex flex-col w-full">
        {searchResults &&
          searchResults.results.map((movie: any) => (
            <SearchingItem key={movie.id} movie={movie} />
          ))}
      </div>
      <NavBar />
    </div>
  );
}
