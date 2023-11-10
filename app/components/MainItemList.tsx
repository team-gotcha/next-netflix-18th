import React from 'react';
import { getImageUrl } from '../../api/movieApi';
import styled from 'styled-components';
import Image from 'next/image';

const MainItemList = ({ title, data }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ItemList>
        {data.results &&
          data.results.map((movie) => (
            <MovieContainer
              key={movie.id}
              src={getImageUrl(movie.poster_path)}
              alt="movie poster"
              title={title}
            />
          ))}
      </ItemList>
    </Wrapper>
  );
};
export default MainItemList;

const Wrapper = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 1.30756rem;
  font-style: normal;
  font-weight: 700;
  color: white;
`;
const MovieContainer = styled.img`
  height: 10rem;
  border-radius: 0.125rem;
`;
const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
