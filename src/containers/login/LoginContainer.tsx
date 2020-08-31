import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withCookies, ReactCookieProps, useCookies } from "react-cookie";

import userStore from "store/user";
import Login from "components/login/Login";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: userStore;
  cookies: any;
}

const LoginContainer = ({ userStore, history, cookies }: Props) => {
  // const [cookies] = useCookies(["access_token"]);
  const onLogin = async (payload: any) => {
    try {
      const res = await userStore?.login(payload);
      // console.log(cookies);
      cookies.set("access_token", res.access_token);
      history.push("/");
    } catch (error) {
      throw error;
    }
  };
  return <Login onLogin={onLogin} />;
};

// @inject("userStore")
// @observer
// class LoginContainer extends Component<Props> {
//   private userStore = this.props.userStore as userStore;

//   onLogin = async (payload: any) => {
//     try {
//       await this.userStore.login(payload);
//       this.props.history.push("/");
//     } catch (error) {
//       throw error;
//     }
//   };

//   render() {
//     return <Login onLogin={this.onLogin} />;
//   }
// }

export default inject("userStore")(
  observer(withCookies(withRouter(LoginContainer)))
);
