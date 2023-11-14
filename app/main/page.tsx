'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainItemList from '../components/MainItemList';
import MainControlBox from '../components/MainControlBox';
import MainImage from '../components/MainImage';

import { getMovies, getImageUrl } from '../../api/movieApi';

export default function Main() {
  const [popularData, setPopularData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [upComingData, setUpComingData] = useState();
  const [nowPlayingData, setNowPlayingData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setPopularData(await getMovies('movie/popular'));
      setTopRatedData(await getMovies('movie/top_rated'));
      setUpComingData(await getMovies('movie/upcoming'));
      setNowPlayingData(await getMovies('movie/now_playing'));
    };

    fetchData();
  }, []);

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
