import React from 'react';
import { getImageUrl } from '../../api/movieApi';
import styled from 'styled-components';
import Image from 'next/image';

const PreviewList = ({ title, data }) => {
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
            />
          ))}
      </ItemList>
    </Wrapper>
  );
};
export default PreviewList;

const Wrapper = styled.div`
  width: 100%;
  height: 6.375rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 1.67175rem;
  font-style: normal;
  font-weight: 700;
  color: white;
`;
const MovieContainer = styled.img`
  width: 6.375rem;
  height: 6.375rem;
  border-radius: 50%; /* Use border-radius to create a circle */
  object-fit: cover;
`;
const ItemList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
