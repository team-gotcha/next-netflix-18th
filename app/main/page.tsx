import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainItemList from '../components/MainItemList';
import MainControlBox from '../components/MainControlBox';
import MainImage from '../components/MainImage';

import { getMovies } from '../../api/movieApi';

export default async function Main() {
  const popularData = await getMovies('movie/popular');
  const topRatedData = await getMovies('movie/top_rated');
  const upComingData = await getMovies('movie/upcoming');
  const nowPlayingData = await getMovies('movie/now_playing');
  return (
    <div className="relative max-w-[450px] w-full h-screen bg-black flex justify-start lg:w-[450px]">
      <Header />
      <div className="flex flex-col w-full h-70vh gap-5 relative">
        {popularData && <MainImage data={popularData} />}
        <MainControlBox />

        <div className="flex flex-col pl-4 gap-3 pb-8">
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
        </div>
      </div>
      <NavBar />
    </div>
  );
}
