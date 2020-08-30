import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import userStore from "store/user";
import Login from "components/login/Login";

interface Props extends RouteComponentProps {
  userStore?: userStore;
}

@inject("userStore")
@observer
class LoginContainer extends Component<Props> {
  private userStore = this.props.userStore as userStore;

  onLogin = async (payload: any) => {
    try {
      await this.userStore.login(payload);
      this.props.history.push("/");
    } catch (error) {
      throw error;
    }
  };

  render() {
    return <Login onLogin={this.onLogin} />;
  }
}

export default withRouter(LoginContainer);
