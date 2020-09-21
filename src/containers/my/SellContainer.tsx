import PostCardContainer from "containers/util/post/PostCardContainer";
import { inject, useObserver } from "mobx-react";
import React, { useEffect } from "react";
import postStore from "store/post";
import userStore from "store/user";

interface Props {
  userStore?: userStore;
  postStore?: postStore;
}

const SellContainer = ({ userStore, postStore }: Props) => {
  useEffect(() => {
    (async () => {
      await postStore?.getSellList(userStore!.user.id!);
    })();
  }, [postStore, userStore]);
  return useObserver(() => <PostCardContainer posts={postStore?.sellList} />);
};

export default inject("postStore", "userStore")(SellContainer);
