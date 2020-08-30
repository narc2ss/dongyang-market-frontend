import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withCookies, ReactCookieProps } from "react-cookie";

import userStore from "store/user";
import Login from "components/login/Login";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: userStore;
}

@inject("userStore")
@observer
class LoginContainer extends Component<Props> {
  private userStore = this.props.userStore as userStore;

  onLogin = async (payload: any) => {
    try {
      await this.userStore.login(payload);
      console.log(this.props.cookies?.get("access_token"));
      this.props.history.push("/");
    } catch (error) {
      throw error;
    }
  };

  render() {
    return <Login onLogin={this.onLogin} />;
  }
}

export default withCookies(withRouter(LoginContainer));
