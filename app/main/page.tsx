"use client";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
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
