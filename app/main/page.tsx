'use client';
import {
  getTopRated,
  getNowPlaying,
  getPopular,
  getUpcoming,
  getImageUrl,
  getTopTv,
} from '../../api/movieApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainItemList from '../components/MainItemList';
import PreviewList from '../components/PreviewList';
import MainControlBox from '../components/MainControlBox';
import MainImage from '../components/MainImage';

export default function Main() {
  const [popularData, setPopularData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [upComingData, setUpComingData] = useState();
  const [nowPlayingData, setNowPlayingData] = useState();
  const [topTv, setTopTv] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const nowPlayingData = await getNowPlaying();
      const topRatedData = await getTopRated();
      const popularData = await getPopular();
      const upcomingData = await getUpcoming();
      const topTv = await getTopTv();

      setPopularData(popularData);
      setTopRatedData(topRatedData);
      setUpComingData(upcomingData);
      setNowPlayingData(nowPlayingData);
      setTopTv(topTv);
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
          {upComingData && <PreviewList title="Previews" data={upComingData} />}
          {popularData && (
            <MainItemList title="Popular on Netflix" data={popularData} />
          )}
          {topRatedData && (
            <MainItemList title="Trending Now" data={topRatedData} />
          )}
          {nowPlayingData && (
            <MainItemList title="Now Playing" data={nowPlayingData} />
          )}
          {nowPlayingData && (
            <MainItemList title="Top Tv Series" data={topTv} />
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
  width: 100vw;
  height: 100vh;
  background-color: #000000;

  display: flex;
  justify-content: flex-start;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  gap: 5%;
`;
