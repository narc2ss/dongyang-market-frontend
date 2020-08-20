import React from "react";

import PostCard from "components/util/post/PostCard";
import styled from "styled-components";

const posts = [
  {
    id: 1,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2019년형",
    price: 150000,
    state: "판매중",
  },
  {
    id: 2,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2020년형",
    price: 2600000,
    state: "판매중",
  },
  {
    id: 3,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2021년형",
    price: 5000000,
    state: "판매중",
  },
  {
    id: 4,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2015년형",
    price: 900000,
    state: "판매중",
  },
  {
    id: 5,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2015년형",
    price: 900000,
    state: "판매중",
  },
  {
    id: 6,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2015년형",
    price: 900000,
    state: "판매중",
  },
  {
    id: 7,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2015년형",
    price: 900000,
    state: "판매중",
  },
  {
    id: 8,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2015년형",
    price: 900000,
    state: "판매중",
  },
  {
    id: 9,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2015년형",
    price: 900000,
    state: "판매중",
  },
  {
    id: 10,
    url: "static/img/sampleImg.png",
    title: "맥북에어 2015년형",
    price: 900000,
    state: "판매중",
  },
];

const PostCardContainer = () => {
  return (
    <PostWrapper>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </PostWrapper>
  );
};

const PostWrapper = styled.article`
  width: 100%;
  height: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

export default PostCardContainer;
