import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getImageUrl } from "@/api/movieApi";

const MainImage = ({ data }) => {
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
    <Wrapper>
      {randomNum !== 0 && (
        <Image
          src={getImageUrl(data.results[randomNum].poster_path)}
          alt="banner_img"
          fill
          priority
          style={{
            objectFit: "cover",
            opacity: opacity / 100,
            transition: "all 0.5s ease-in-out",
          }}
        />
      )}
      <div className="overlay" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: max(50vh);

  .overlay {
    position: absolute;
    background-color: rgb(90, 90, 90);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
    z-index: 10;
    width: 100%;
    height: 100%;
  }
`;

export default MainImage;
