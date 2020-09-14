import React from "react";
import { inject, observer } from "mobx-react";

import userStore from "store/user";
import Header from "components/common/header";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
  userStore?: userStore;
}

const HeaderContainer = ({ userStore, history }: Props) => {
  const onSearch = async (keyword: string) => {
    history.push(`/search/${keyword}`);
  };
  return <Header user={userStore!.user} onSearch={onSearch} />;
};

export default inject("userStore")(observer(withRouter(HeaderContainer)));
