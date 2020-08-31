import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { withCookies, ReactCookieProps, useCookies } from "react-cookie";
import { HeaderContainer, FooterContainer } from "containers/common";
import {
  MainPage,
  PostPage,
  WritePage,
  MyPage,
  LoginPage,
  SignupPage,
} from "pages";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import userStore from "store/user";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: userStore;
}

function App({ cookies, userStore }: Props) {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    (async () => {
      // const token = cookies?.get("access_token");
      // console.log(token);
      const res = await userStore?.check();
      console.log(res);
    })();
  });

  return (
    <>
      <HeaderContainer />

      <AppWrapper>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/write" component={WritePage} />
          <Route path="/my" component={MyPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </AppWrapper>
      <FooterContainer />
    </>
  );
}

const AppWrapper = styled.article`
  width: 1080px;
  margin: 0 auto;
  padding: 1rem 0;
`;

export default inject("userStore")(observer(withCookies(withRouter(App))));
