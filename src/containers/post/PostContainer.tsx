import React, { useEffect } from "react";
import Post from "components/post";
import { inject, useObserver } from "mobx-react";
import postStore from "store/post";
import { withRouter, RouteComponentProps } from "react-router-dom";
import userStore from "store/user";

interface Props extends RouteComponentProps<MatchParams> {
  postStore?: postStore;
  userStore?: userStore;
}

interface MatchParams {
  id: string;
}

const PostContainer = ({ postStore, userStore, match, history }: Props) => {
  useEffect(() => {
    const { id } = match.params;
    (async () => await postStore?.getPost(id))();
  }, [postStore, match.params]);

  const onRemove = async (id: number) => {
    try {
      await postStore?.remove(id);
      alert("게시글이 삭제되었습니다.");
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return useObserver(() => (
    <Post post={postStore!.post} user={userStore!.user} onRemove={onRemove} />
  ));
};

export default inject("postStore", "userStore")(withRouter(PostContainer));
