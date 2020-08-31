import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
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

interface Props extends ReactCookieProps {}

function App({ cookies }: Props) {
  useEffect(() => {
    try {
      const token = cookies?.get("access_token");
      if (token) {
        // 재발금 or 로그인 정보 받아와서 처리
      }
    } catch (error) {}
  }, []);

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

export default withCookies(withRouter(App));
