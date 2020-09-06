import React from "react";
import PostCardContainer from "containers/util/post/PostCardContainer";
import styled from "styled-components";
import { PostType } from "store/post/types";

interface Props {
  posts?: PostType[];
}

const Main = ({ posts }: Props) => {
  return (
    <MainWrapper>
      <MainTitle>어서오세요 동양마켓입니다.</MainTitle>
      <p>
        동양마켓은 동양미래대학교 학생들이 자유롭게 물건을 사고 팔 수 있도록
        여러가지 기능을 제공합니다. 어서 둘러보세요
      </p>
      <SubTitle>인기상품</SubTitle>
      <PostCardContainer posts={posts} />
    </MainWrapper>
  );
};

export const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333b43;
  margin: 60px 0;
  text-align: center;
`;

const MainWrapper = styled.section`
  & > h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333b43;
    margin: 60px 0;
    text-align: center;
  }
  & > p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    text-align: center;
    color: #4f565e;
    margin: 80px 0;
  }
`;

export const SubTitle = styled.h5`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

export default Main;
