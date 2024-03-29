import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import url from "static/img/sampleImg.png";
import { setPostStatus, setComma } from "lib";

interface Props {
  post: any;
}
const PostCard = ({ post }: Props) => {
  return (
    <PostCardWrapper to={`/post/${post.id}`}>
      <img src={url} alt="sample" />
      <TextWrapper>
        <h2>{post.title}</h2>
        <h3>{setComma(post.price)}원</h3>
        <h4>{setPostStatus(post.status)}</h4>
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 5px;

  img {
    width: 200px;
    height: 50%;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
