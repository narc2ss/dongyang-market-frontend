import React from "react";
import My from "components/my/My";
import { inject, observer } from "mobx-react";
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
  return <My onLogout={onLogout} />;
};

export default inject("userStore")(observer(withRouter(MyContainer)));
