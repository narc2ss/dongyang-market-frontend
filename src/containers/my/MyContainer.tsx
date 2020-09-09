import React from "react";
import My from "components/my/My";
import { inject, useObserver } from "mobx-react";
import userStore from "store/user";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {
  userStore?: userStore;
}

const MyContainer = ({ userStore, history }: Props) => {
  const onLogout = async () => {
    try {
      await userStore?.logout();
      history.push("/");
    } catch (error) {
      throw error;
    }
  };
  return useObserver(() => <My onLogout={onLogout} user={userStore?.user} />);
};

export default inject("userStore")(withRouter(MyContainer));
