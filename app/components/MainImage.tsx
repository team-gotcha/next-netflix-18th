import Image from 'next/image';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getImageUrl } from '@/api/movieApi';

const MainImage = ({ data }) => {
  const [randomNum, setRandomNum] = useState(0);

  const getRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 10) + 1);
  };

  useEffect(() => {
    if (randomNum === 0) {
      getRandomNum();
    }
    const timeout = setTimeout(() => {
      setRandomNum(((randomNum + 1) % 3) + 1);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [randomNum]);

  return (
    <Wrapper>
      {randomNum !== 0 && data.results && (
        <StyledImage
          src={getImageUrl(data.results[randomNum].poster_path)}
          alt="banner_img"
        />
      )}
    </Wrapper>
  );
};
const StyledImage = styled.img`
  width: 100%;
  height:  100%;
  object-fit: fill;
  transition: all 0.5s ease-in-out;

    pointer-events: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: max(50vh);
`;

export default MainImage;
