import React from "react";
import { getImageUrl } from "../../api/movieApi";
import styled from "styled-components";
import Image from "next/image";

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
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ItemList>
        {data.results &&
          data.results.map((movie) => (
            <MovieContainer key={movie.id} circle={circle}>
              <Image
                src={getImageUrl(movie.poster_path)}
                alt="movie poster"
                width={100}
                height={circle ? 100 : 161}
                loading="eager"
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/100"
                style={{ objectFit: "cover" }}
              />
            </MovieContainer>
          ))}
      </ItemList>
    </Wrapper>
  );
};
export default MainItemList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 1.67175rem;
  font-style: normal;
  font-weight: 700;
  color: white;
  padding-bottom: 1rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  overflow-x: scroll;

  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MovieContainer = styled.div<{ circle: boolean }>`
  background-color: #8080809b;
  min-width: 100px;
  height: ${(props) => (props.circle ? "100px" : "15px")};
  border-radius: ${(props) => (props.circle ? "50%" : "2px")};
  overflow: hidden;
  position: relative;
  &:hover {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
  }
  &:not(:hover) {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
`;
