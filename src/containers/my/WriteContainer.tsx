import React from "react";
import PostCardContainer from "containers/util/post/PostCardContainer";
import postStore from "store/post";
import { inject, observer } from "mobx-react";

interface Props {
  postStore: postStore;
}

const WriteContainer = ({ postStore }: Props) => {
  return <PostCardContainer posts={postStore.posts} />;
};

export default inject("postStore")(observer(WriteContainer));
