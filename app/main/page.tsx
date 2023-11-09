"use client";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MainControlBox from "../components/MainControlBox";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainControlBox />
      <NavBar />
    </Wrapper>
  );
};
export default MainPage;

const Wrapper = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background-color: #000000;
`;
