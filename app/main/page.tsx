'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainItemList from '../components/MainItemList';
import MainControlBox from '../components/MainControlBox';
import MainImage from '../components/MainImage';

import { getMovies, getImageUrl } from '../../api/movieApi';

export const getData = async () => {
  const popularData = await getMovies('movie/popular');
  const topRatedData = await getMovies('movie/top_rated');
  const upComingData = await getMovies('movie/upcoming');
  const nowPlayingData = await getMovies('movie/now_playing');

  const movieDataArray = [
    popularData,
    topRatedData,
    upComingData,
    nowPlayingData,
  ];

  return movieDataArray;
};

interface dataProps {
  movieDataArray: Array<{
    results?: {
      id: number;
      poster_path: string;
    }[];
  }>;
}

export default async function Main() {
  const [popularData, topRatedData, upComingData, nowPlayingData] =
    await getData();
  return (
    <Wrapper>
      <Header />
      <Body>
        <BodyTop>
          {popularData && <MainImage data={popularData} />}
          <MainControlBox />
        </BodyTop>

        <List>
          {upComingData && (
            <MainItemList title="Previews" data={upComingData} circle={true} />
          )}
          {popularData && (
            <MainItemList
              title="Popular on Netflix"
              data={popularData}
              circle={false}
            />
          )}
          {topRatedData && (
            <MainItemList
              title="Trending Now"
              data={topRatedData}
              circle={false}
            />
          )}
          {nowPlayingData && (
            <MainItemList
              title="Now Playing"
              data={nowPlayingData}
              circle={false}
            />
          )}
        </List>
      </Body>
      <NavBar />
    </Wrapper>
  );
}

const BodyTop = styled.div`
  gap: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  gap: 3rem;

  padding-bottom: 8rem;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 375px;
  width: 100vw;
  height: 100vh;
  background-color: #000000;

  display: flex;
  justify-content: flex-start;

  @media (max-width: 375px) {
    width: 375px;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  gap: 5%;
`;
