import React from "react";
import PostCardContainer from "containers/util/post/PostCardContainer";
import postStore from "store/post";
import { inject, observer } from "mobx-react";
import { SubTitle } from "components/main/Main";

interface Props {
  postStore: postStore;
}

const BoughtContainer = ({ postStore }: Props) => {
  // return <PostCardContainer posts={postStore.posts} />;
  return <SubTitle>아직 구매한 게시글이 없습니다.</SubTitle>;
};

export default inject("postStore")(observer(BoughtContainer));
