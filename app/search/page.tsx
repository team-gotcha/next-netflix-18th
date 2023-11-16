"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
// import { fetchSearchResults, getImageUrl } from "../../api/movieApi";

import NavBar from "../components/NavBar";
import SearchingItem from "../components/SearchingPage/SearchingItem";

interface Movie {
  id: number;
  poster_path: string;
}

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  // const {
  //   data: searchResults,
  //   isLoading,
  //   isError,
  // } = useQuery(
  //   ["search", { query: inputValue }],
  //   () => fetchSearchResults(inputValue),
  //   {
  //     enabled: inputValue !== "", // Disable fetching if inputValue is empty
  //   }
  // );

  return (
    <div className="flex flex-col w-full h-screen items-start max-w-[450px] ">
      <div className="flex flex-row w-full h-14 justify-between items-center px-5 mt-14 bg-neutral-700">
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
        />
      </div>
      <div className="text-white text-2xl font-bold my-5">Top Searches</div>

      {/* {searchResults &&
        searchResults.map((movie: Movie) => (
          <SearchingItem key={movie.id} src={getImageUrl(movie.poster_path)} />
        ))} */}
      <NavBar />
    </div>
  );
}
