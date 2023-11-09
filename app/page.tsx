'use client';
import {
  getTopRated,
  getNowPlaying,
  getPopular,
  getUpcoming,
} from '@/api/movieApi';
import React, { useEffect, useState } from 'react';

export default function Home() {
  //데이터 받아오기
  const fetchData = async () => {
    const nowPlayingData = await getNowPlaying();
    const topRatedData = await getTopRated();
    const popularData = await getPopular();
    const upcomingData = await getUpcoming();

    // console.log('Now Playing:', nowPlayingData);
    // console.log('Top Rated:', topRatedData);
    console.log('Popular:', popularData.results[0].title);
    // console.log('Upcoming:', upcomingData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>ThisHome</h1>
    </div>
  );
}
