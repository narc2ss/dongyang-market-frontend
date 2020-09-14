import React from "react";
import { SubTitle } from "components/main/Main";
import PostCardContainer from "containers/util/post/PostCardContainer";
import { PostType } from "store/post/types";

interface Props {
  keyword: string;
  posts: PostType[];
}

const Search = ({ keyword, posts }: Props) => {
  return (
    <>
      <SubTitle>{`"${keyword}"의 검색 결과`}</SubTitle>
      <PostCardContainer posts={posts} />
    </>
  );
};

export default Search;
