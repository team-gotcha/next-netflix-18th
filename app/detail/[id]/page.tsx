'use client';
import { usePathname, useRouter } from 'next/navigation';
import { getImageUrl, getMovies } from '@/api/movieApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface dataProps {
  poster_path: string;
  title: string;
  overview: string;
}

export default function Detail() {
  let movieId = '0';
  //pathvariable 추출
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
    <Wrapper>
      {data && (
        <Image
          src={getImageUrl(data.poster_path)}
          alt="movie poster"
          width={100}
          height={100}
        />
      )}
      <PlayBut>▶︎ Play</PlayBut>
      <Text>
        {data && <Title>{data.title}</Title>}
        {data && <DescribeText>{data.overview}</DescribeText>}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const PlayBut = styled.div`
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
const Text = styled.div`
  font-family: SF Pro Display;
  font-size: 1.67175rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
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
