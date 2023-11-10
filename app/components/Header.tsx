import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const Header = () => {
  const MENU_LIST = ["TV Shows", "Movies", "My List"];
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper scrollPosition={scrollPosition}>
      <div>
        <Image
          src={"/images/netflix-logo.svg"}
          width={57}
          height={57}
          alt="logo"
        />
      </div>
      {MENU_LIST.map((menu) => {
        return <Menu key={menu}>{menu}</Menu>;
      })}
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div<{ scrollPosition: number }>`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 375px;
  height: 57px;
  padding: 44px 20px 30px;
  z-index: 99;
  background: ${({ scrollPosition }) =>
    scrollPosition > 100
      ? `#121212`
      : `linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0))`};
  transition: background 0.3s ease;
`;

const Menu = styled.span`
  color: white;
  font-size: 17.2px;
  cursor: pointer;
`;
