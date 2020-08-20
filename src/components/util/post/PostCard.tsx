import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import url from "static/img/sampleImg.png";

interface Props {
  post: any;
}

const PostCard = ({ post }: Props) => {
  return (
    <PostCardWrapper to="/post/3">
      <img src={url} alt="sample" />
      <TextWrapper>
        <h2>{post.title}</h2>
        <h3>{post.price}원</h3>
        <h4>{post.state}</h4>
        <div>
          <span>찜 80</span>
          <span>조회 323</span>
        </div>
      </TextWrapper>
    </PostCardWrapper>
  );
};

const PostCardWrapper = styled(Link)`
  display: inline-block;
  width: 200px;
  height: 230px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  img {
    width: 200px;
    height: 50%;
  }
  &:hover {
    transform: translateY(-3px);
    transition: ease 0.3s;
  }
`;

const TextWrapper = styled.div`
  height: 50%;
  padding: 1rem;

  & > h2 {
    color: #333b43;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & > h3 {
    color: #2c698d;
    margin-bottom: 0.5rem;
  }
  & > h4 {
    color: #8a97ab;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    justify-content: flex-end;
    span {
      margin-left: 0.5rem;
      font-size: 0.875rem;
      color: #c9d5ff;
    }
  }
`;

export default PostCard;
