"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MainItemList from "../components/MainItemList";
import MainControlBox from "../components/MainControlBox";
import MainImage from "../components/MainImage";

import {
  getTopRated,
  getNowPlaying,
  getPopular,
  getUpcoming,
  getImageUrl,
  getTopTv,
} from "../../api/movieApi";

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
      console.log(topTv);
    };

    fetchData();
  }, []);

  return (
    <div className="relative max-w-[375px] w-full h-screen bg-black flex justify-start lg:w-[375px]">
      <Header />
      <div className="flex flex-col w-full h-70vh gap-5">
        <div className="flex gap-8">
          {popularData && <MainImage data={popularData} />}
          <MainControlBox />
        </div>

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
          {nowPlayingData && (
            <MainItemList title="Top Tv Series" data={topTv} circle={false} />
          )}
        </div>
      </div>
      <NavBar />
    </div>
  );
}
