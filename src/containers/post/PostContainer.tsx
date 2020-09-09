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

const PostContainer = ({ postStore, userStore, match }: Props) => {
  useEffect(() => {
    const { id } = match.params;
    (async () => await postStore?.getPost(id))();
  }, [postStore, match.params]);

  return useObserver(() => (
    <Post post={postStore!.post} user={userStore!.user} />
  ));
};

export default inject("postStore", "userStore")(withRouter(PostContainer));
