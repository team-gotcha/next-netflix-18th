"use client";
import {
  getTopRated,
  getNowPlaying,
  getPopular,
  getUpcoming,
  getImageUrl,
} from "../../api/movieApi";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MainControlBox from "../components/MainControlBox";

export default function Main() {
  const [popularData, setPopularData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [upComingData, setUpComingData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const nowPlayingData = await getNowPlaying();
      const topRatedData = await getTopRated();
      const popularData = await getPopular();
      const upcomingData = await getUpcoming();

      setPopularData(popularData);
      setTopRatedData(topRatedData);
      setUpComingData(upcomingData);

      console.log(popularData);
      console.log(topRatedData);
      console.log(upcomingData);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />

      <MainControlBox />
      <NavBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background-color: #000000;
`;
