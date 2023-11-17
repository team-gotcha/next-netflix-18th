'use client';
import React from 'react';
import { getImageUrl } from '../../api/movieApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface MainItemListProps {
  title: string;
  data: {
    results: {
      id: number;
      poster_path: string;
    }[];
  };
  circle: boolean;
}

const MainItemList = ({ title, data, circle }: MainItemListProps) => {
  const router = useRouter();
  const movePage = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="font-bold text-2xl text-white pb-4">{title}</div>
      <div className="flex flex-row justify-between w-full overflow-x-scroll gap-4 scrollbar-none">
        {data.results &&
          data.results.map((movie) => (
            <div
              key={movie.id}
              onClick={() => movePage(movie.id)}
              className={`min-w-[100px] ${
                circle ? 'h-[100px] rounded-full' : 'h-[150px] rounded-md'
              } overflow-hidden relative transition-transform transform scale-100 hover:scale-95 hover:transition-all duration-200 ease-in-out`}
            >
              <Image
                src={getImageUrl(movie.poster_path)}
                alt="movie poster"
                width={100}
                height={circle ? 100 : 161}
                loading="eager"
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/100"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default MainItemList;
