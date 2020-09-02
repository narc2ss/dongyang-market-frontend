import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";

import { Write } from "components/write";
import { Id, WriteType } from "store/post/types";
import postStore from "store/post";
import userStore from "store/user";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {
  userStore?: userStore;
  postStore?: postStore;
}

const WriteContainer = ({ postStore, userStore, history }: Props) => {
  const [seller, setSeller] = useState<Id>(null);
  useEffect(() => {
    (async () => setSeller(await userStore?.check()))();
  }, [userStore]);
  const onWrite = async (payload: WriteType) => {
    try {
      const { status, id } = await postStore!.write({ ...payload, seller });
      if (status === 201) history.push(`/post/${id}`);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <Write onWrite={onWrite} />
    </>
  );
};

export default inject(
  "postStore",
  "userStore"
)(observer(withRouter(WriteContainer)));
