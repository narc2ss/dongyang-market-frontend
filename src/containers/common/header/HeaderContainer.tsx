import React from "react";
import { inject, observer } from "mobx-react";

import userStore from "store/user";
import Header from "components/common/header";
import { withCookies, ReactCookieProps } from "react-cookie";

interface Props extends ReactCookieProps {
  userStore?: userStore;
}

const HeaderContainer = ({ userStore }: Props) => {
  return <Header />;
};

// @inject("userStore")
// @observer
// class HeaderContainer extends Component<Props> {
//   private userStore = this.props.userStore as userStore;

//   render() {
//     return (
//       <>
//         <Header userInfo={this.userStore.getUser!} />
//       </>
//     );
//   }
// }

export default inject("userStore")(observer(withCookies(HeaderContainer)));
