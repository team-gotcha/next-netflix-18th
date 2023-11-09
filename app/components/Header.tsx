import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Header = () => {
  const MENU_LIST = ["TV Shows", "Movies", "My List"];

  return (
    <Wrapper>
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

const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  width: 338px;
  height: 57px;
  z-index: 99;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.span`
  color: white;
  font-size: 17.2px;
  cursor: pointer;
`;
