import React from "react";

import PostCard from "components/util/post/PostCard";
import styled from "styled-components";
import { PostType } from "store/post/types";

interface Props {
  posts?: PostType[];
}

const PostCardContainer = ({ posts }: Props) => {
  return posts ? (
    <PostWrapper>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </PostWrapper>
  ) : (
    <div></div>
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
