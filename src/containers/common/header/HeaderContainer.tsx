import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import userStore from "store/user";
import Header from "components/common/header";

interface Props {
  userStore?: userStore;
}

@inject("userStore")
@observer
class HeaderContainer extends Component<Props> {
  private userStore = this.props.userStore as userStore;

  render() {
    return (
      <>
        <Header userInfo={this.userStore.getUser!} />
      </>
    );
  }
}

export default HeaderContainer;
