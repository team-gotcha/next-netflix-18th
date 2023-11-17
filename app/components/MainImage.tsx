"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageUrl } from "@/api/movieApi";

interface MainImageProps {
  data: {
    results?: {
      id: number;
      poster_path: string;
    }[];
  };
}

const MainImage = ({ data }: MainImageProps) => {
  const [randomNum, setRandomNum] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const getRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 10) + 1);
  };

  const handleOpacity = () => {
    setOpacity(0);
    setTimeout(() => setOpacity(100), 500);
  };

  useEffect(() => {
    if (randomNum === 0) {
      getRandomNum();
    }
    const timeout = setTimeout(() => {
      setRandomNum(((randomNum + 1) % 3) + 1);
    }, 10000);
    const timeopacity = setTimeout(() => {
      handleOpacity();
    }, 9500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeopacity);
    };
  }, [randomNum]);

  return (
    <div className="relative flex justify-center items-start w-full h-3/5 ">
      {data?.results && randomNum !== 0 && (
        <img
          src={getImageUrl(data?.results[randomNum].poster_path)}
          alt="banner_img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: opacity / 100,
            transition: "all 0.5s ease-in-out",
          }}
        />
      )}
      <div className="absolute z-10 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
    </div>
  );
};

export default MainImage;
