import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useCookies } from "react-cookie";

import userStore from "store/user";
import Login from "components/login/Login";

interface Props extends RouteComponentProps {
  userStore?: userStore;
}

const LoginContainer = ({ userStore, history }: Props) => {
  const [cookies] = useCookies(["access_token"]);
  const onLogin = async (payload: any) => {
    try {
      await userStore?.login(payload);
      console.log(cookies);
      // if (data) history.push("/");
    } catch (error) {
      throw error;
    }
  };
  return <Login onLogin={onLogin} />;
};

export default inject("userStore")(observer(withRouter(LoginContainer)));
