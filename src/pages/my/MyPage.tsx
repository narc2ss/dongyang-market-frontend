import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import {
  MyContainer,
  ChatContainer,
  WriteContainer,
  BoughtContainer,
  LikeContainer,
} from "containers/my";
import styled from "styled-components";
import { SpaceBetween } from "style/layout";

const MyPage = () => {
  return (
    <MyWrapper>
      <MyContainer />
      <ContainerWrapper>
        <ul>
          <li>
            <NavLink exact to="/my" activeClassName="active">
              나의 채팅
            </NavLink>
          </li>
          <li>
            <NavLink to="/my/like" activeClassName="active">
              나의 찜
            </NavLink>
          </li>
          <li>
            <NavLink to="/my/write" activeClassName="active">
              나의 판매상품
            </NavLink>
          </li>
          <li>
            <NavLink to="/my/bought" activeClassName="active">
              나의 구매상품
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/my" component={ChatContainer} />
          <Route path="/my/like" component={LikeContainer} />
          <Route path="/my/write" component={WriteContainer} />
          <Route path="/my/bought" component={BoughtContainer} />
        </Switch>
      </ContainerWrapper>
    </MyWrapper>
  );
};

const MyWrapper = styled.div`
  /* color: ${(props) => props.theme.palette.secondary}; */

  .active {
    color: #2c698d;
    font-weight: 500;
  }
  a {
    color: #000;
    font-weight: 300;
  }
`;

const ContainerWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 2rem;
  border-radius: 5px;

  & > ul {
    padding-right: 2rem;
    li {
      margin-bottom: 2rem;
      width: 6rem;
    }
  }
`;

export default MyPage;
