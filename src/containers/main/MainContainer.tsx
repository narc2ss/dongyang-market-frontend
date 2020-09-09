import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";

import Main from "components/main";
import postStore from "store/post";

interface Props {
  postStore?: postStore;
}

const MainContainer = ({ postStore }: Props) => {
  useEffect(() => {
    (async () => await postStore?.getPosts())();
  }, [postStore]);
  return <Main posts={postStore!.posts} />;
};

export default inject("postStore")(observer(MainContainer));
