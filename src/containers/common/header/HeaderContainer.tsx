import React from "react";
import { inject, observer } from "mobx-react";

import userStore from "store/user";
import Header from "components/common/header";

interface Props {
  userStore?: userStore;
}

const HeaderContainer = ({ userStore }: Props) => {
  return <Header user={userStore?.getUser} />;
};

export default inject("userStore")(observer(HeaderContainer));
