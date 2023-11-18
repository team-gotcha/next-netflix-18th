'use client';
import { usePathname, useRouter } from 'next/navigation';
import { getImageUrl, getMovies } from '@/api/movieApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '@/app/components/NavBar';

interface dataProps {
  poster_path: string;
  title: string;
  overview: string;
}

export default function Detail() {
  let movieId = '0';
  const router = usePathname();
  const numberPart = router.match(/\d+/);

  const [data, setData] = useState<dataProps>();

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
    <div className="relative max-w-[375px] w-full h-screen bg-black flex flex-col justify-start align-middle lg:w-[375px] gap-5">
      {data && (
        <StyledImg src={getImageUrl(data.poster_path)} alt="movie poster" />
      )}
      <div className="w-full flex flex-col pl-8 flex gap-5">
        <PlayBut>▶︎ Play</PlayBut>

        <Text>
          {data && <Title>{data.title}</Title>}
          {data && <DescribeText>{data.overview}</DescribeText>}
        </Text>
      </div>
      <NavBar />
    </div>
  );
}

const PlayBut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18.9375rem;
  height: 2.8125rem;
  border-radius: 0.35156rem;
  background: #c4c4c4;

  font-family: SF Pro Display;
  font-size: 1.27888rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 60%;
  padding-bottom: 5%;
  opacity: 0.7;
`;
const Text = styled.div`
  font-family: SF Pro Display;
  font-size: 1.67175rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.div`
  color: rgba(255, 255, 255, 1);
`;
const DescribeText = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 0.69631rem;
  font-weight: 400;
  line-height: 0.88563rem;
`;
