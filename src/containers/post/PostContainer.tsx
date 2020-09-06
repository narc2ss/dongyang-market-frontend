import React, { useEffect } from "react";
import Post from "components/post";
import { inject, observer } from "mobx-react";
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
  const { id } = match.params;
  useEffect(() => {
    (async () => await postStore?.getPost(id))();
  }, [postStore, id]);
  return <Post post={postStore?.post} user={userStore?.user} />;
};

export default inject(
  "postStore",
  "userStore"
)(observer(withRouter(PostContainer)));
