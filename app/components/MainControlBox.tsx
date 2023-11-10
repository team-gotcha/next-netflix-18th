import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const MainControlBox = () => {
  return (
    <Wrapper>
      <TopRank>
        <Image src={'/images/topten.svg'} width={15} height={15} alt="topten" />
        <TopRankText>in Nigeria Today</TopRankText>
      </TopRank>
      <BtnDiv>
        <IconBox>
          <Image src={'/images/plus.svg'} width={24} height={24} alt="plus" />
          <span>My List</span>
        </IconBox>

        <PlayButton>
          <Image
            src={'/images/play_icon.svg'}
            width={24}
            height={24}
            alt="play_icon"
          />
          <span>Play</span>
        </PlayButton>

        <IconBox>
          <Image src={'/images/info.svg'} width={24} height={24} alt="info" />
          <span>Info</span>
        </IconBox>
      </BtnDiv>
    </Wrapper>
  );
};
export default MainControlBox;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 11px;
  padding: 10px 43px 43px 43px;
  width: 100%;
`;

export const TopRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopRankText = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;

  margin-left: 5px;
`;

export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c4c4c4;
  border-radius: 5.6px;
  width: 110px;
  height: 45px;
  gap: 10px;
  cursor: pointer;
  border: 0;
  span {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.2rem;
  color: white;
  cursor: pointer;
`;
