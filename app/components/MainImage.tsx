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
      <div>{randomNum}</div>
      {randomNum !== 0 && data.results && (
        <img
          src={getImageUrl(data.results[randomNum].poster_path)}
          alt="banner_img"
          style={{
            width: '26rem',
            height: '26rem',
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.00) 87.26%, #000 100%)',

            transition: 'all 0.5s ease-in-out',
          }}
        />
      )}
    </Wrapper>
  );
};

export default MainImage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max(46.18vh, 24.438rem);
  height: max(49.01vh, 25.9375rem);
`;
