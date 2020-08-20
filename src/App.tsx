import React from "react";
import { Switch, Route } from "react-router-dom";

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

function App() {
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

export default App;
