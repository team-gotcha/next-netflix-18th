import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MainControlBox from "../components/MainControlBox";
import MainImage from "../components/MainImage";
import MainItemList from "../components/MainItemList";

import {
  getTopRated,
  getNowPlaying,
  getPopular,
  getUpcoming,
  getTopTv,
} from "../../api/movieApi";

const Main = ({
  upComingData,
  popularData,
  topRatedData,
  nowPlayingData,
  topTv,
}: any) => {
  const sections = [
    { id: 0, title: "Previews", data: upComingData, circle: true },
    { id: 1, title: "Popular on Netflix", data: popularData, circle: false },
    { id: 2, title: "Trending Now", data: topRatedData, circle: false },
    { id: 3, title: "Now Playing", data: nowPlayingData, circle: false },
    { id: 4, title: "Top Tv Series", data: topTv, circle: false },
  ];

  useEffect(() => {
    getData();
    setTimeout(() => {}, 4000);
  }, []);

  const getData = async () => {
    const nowPlayingData = await getNowPlaying();
    const popularData = await getPopular();
    const topRatedData = await getTopRated();
    const upComingData = await getUpcoming();
    const topTv = await getTopTv();

    return {
      props: { upComingData, popularData, topRatedData, nowPlayingData, topTv },
    };
  };

  return (
    <Wrapper>
      <Header />
      <Body>
        <BodyTop>
          <MainImage data={popularData} />
          <MainControlBox />
        </BodyTop>

        <List>
          {sections.map((item) => (
            <MainItemList
              key={item.id}
              circle={item.circle}
              title={item.title}
              data={item.data}
            />
          ))}
        </List>
      </Body>
      <NavBar />
    </Wrapper>
  );
};

export default Main;

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
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  gap: 5%;
`;
