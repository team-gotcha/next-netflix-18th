import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";

const MainImage = () => {
  const [randomNum, setRandomNum] = useState(0);

  const getRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 3) + 1);
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
      {randomNum !== 0 && (
        <Image
          src={`/image-poster-${randomNum}.jpeg`}
          alt="banner_img"
          fill
          priority
          style={{
            objectFit: "cover",
            transition: "all 0.5s ease-in-out",
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
