import React, { Component } from "react";
import Main from "components/main";
import { inject, observer } from "mobx-react";
import userStore from "store/user";

interface Props {
  userStore?: userStore;
}

@inject("userStore")
@observer
class MainContainer extends Component<Props> {
  private userStore = this.props.userStore as userStore;

  render() {
    return (
      <>
        <Main />
      </>
    );
  }
}

export default MainContainer;
