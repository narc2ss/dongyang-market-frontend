import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import userStore from "store/user";
import Login from "components/login/Login";

interface Props extends RouteComponentProps {
  userStore?: userStore;
}

const LoginContainer = ({ userStore, history }: Props) => {
  const onLogin = async (payload: any) => {
    try {
      const data = await userStore?.login(payload);
      if (data) history.push("/");
    } catch (error) {
      throw error;
    }
  };
  return <Login onLogin={onLogin} />;
};

export default inject("userStore")(observer(withRouter(LoginContainer)));
