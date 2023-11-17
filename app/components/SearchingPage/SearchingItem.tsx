"use client";
import React, { useState, useEffect } from "react";
import { getImageUrl } from "@/api/movieApi";
import Image from "next/image";

interface SearchingItemProps {
  movie:
    | {
        title: string;
        poster_path: string;
      }
    | null
    | undefined;
}

const SearchingItem = ({ movie }: SearchingItemProps) => {
  if (!movie) {
    return null;
  }

  const hasPoster = movie.poster_path && movie.poster_path.trim() !== "";

  return (
    <>
      <div className="flex flex-row w-full h-[76px] items-center bg-neutral-700 mb-[3px]">
        <div className="relative w-2/5 h-full rounded-sm bg-neutral-500">
          {hasPoster ? (
            <Image
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-row w-3/5 justify-between items-center pl-5 pr-3">
          <div className=" h-8 text-white text-base font-normal">
            {movie.title}
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
