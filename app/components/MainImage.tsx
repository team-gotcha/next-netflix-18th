'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getImageUrl } from '@/api/movieApi';

interface MainImageProps {
  data: {
    results: {
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
    <div className="relative flex justify-center items-start max-h-[50vh]">
      {randomNum !== 0 && (
        <Image
          src={getImageUrl(data.results[randomNum].poster_path)}
          alt="banner_img"
          fill
          priority
          style={{
            objectFit: 'cover',
            opacity: opacity / 100,
            transition: 'all 0.5s ease-in-out',
          }}
        />
      )}
      <div className="absolute z-10 w-full h-full bg-gradient-to-b from-[rgba(0, 0, 0, 0.5)] via-[rgba(0, 0, 0, 0)] to-black" />
    </div>
  );
};

export default MainImage;
