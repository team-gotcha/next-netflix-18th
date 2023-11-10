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
        {popularData && <MainImage data={popularData} />}
        <MainControlBox />
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
        {nowPlayingData && <MainItemList title="Top Tv Series" data={topTv} />}
      </Body>
      <NavBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: #000000;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  gap: 5%;
`;
