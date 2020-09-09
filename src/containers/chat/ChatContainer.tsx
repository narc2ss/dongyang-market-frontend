import React from "react";
import Chat from "components/chat";
import userStore from "store/user";
import postStore from "store/post";
import { useObserver, inject } from "mobx-react";

interface Props {
  userStore?: userStore;
  postStore?: postStore;
}

const ChatContainer = ({ userStore, postStore }: Props) => {
  return useObserver(() => (
    <Chat user={userStore!.user} post={postStore!.post} />
  ));
};

export default inject("userStore", "postStore")(ChatContainer);
