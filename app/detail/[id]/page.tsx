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
      <PlayBut />
      <Text>
        <Title></Title>
        <DescribeText></DescribeText>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const PlayBut = styled.div``;
const Text = styled.div``;
const Title = styled.div``;
const DescribeText = styled.div``;
