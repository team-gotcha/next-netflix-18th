'use client';
import { usePathname, useRouter } from 'next/navigation';
import { getMovies } from '@/api/movieApi';
import { useEffect, useState } from 'react';

export default function Detail() {
  let movieId = '0';
  //pathvariable 추출
  const router = usePathname();
  const numberPart = router.match(/\d+/);
  const [data, setData] = useState();
  if (numberPart) {
    movieId = numberPart[0];
  }
  useEffect(() => {
    const fetchData = async (id: string) => {
      setData(await getMovies(`movie/${id}`));
    };

    fetchData(movieId);
    console.log(data);
  }, [numberPart]);

  return (
    <div>
      <h1>{movieId}상세페이지</h1>
    </div>
  );
}
