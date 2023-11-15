'use client';
import { usePathname, useRouter } from 'next/navigation';
import { getMovies } from '@/api/movieApi';
import { useEffect, useState } from 'react';

export const getData = async (id: string) => {
  const movieData = await getMovies(`movie/${id}`);

  return movieData;
};

export default async function Detail() {
  let movieId = '0';
  //pathvariable 추출
  const router = usePathname();
  const numberPart = router.match(/\d+/);
  if (numberPart) {
    movieId = numberPart[0];
    const data = await getData(movieId);
    console.log(data.title);
  }
  return (
    <div>
      <h1>{movieId}상세페이지</h1>
    </div>
  );
}
