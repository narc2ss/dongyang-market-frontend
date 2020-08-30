import React, { Component } from "react";
import Login from "components/login/Login";
import { inject, observer } from "mobx-react";
import userStore from "store/user";

interface Props {
  userStore?: userStore;
}

@inject("userStore")
@observer
class LoginContainer extends Component<Props> {
  private userStore = this.props.userStore as userStore;

  onLogin = async (payload: any) => {
    try {
      await this.userStore.login(payload);
    } catch (error) {
      throw error;
    }
  };

  render() {
    return <Login onLogin={this.onLogin} />;
  }
}

export default LoginContainer;
