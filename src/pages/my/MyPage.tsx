import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import {
  MyContainer,
  ChatContainer,
  WriteContainer,
  BoughtContainer,
  LikeContainer,
} from "containers/my";

const MyPage = () => {
  return (
    <>
      <MyContainer />
      <ul>
        <li>
          <NavLink exact to="/my">
            나의 채팅
          </NavLink>
        </li>
        <li>
          <NavLink to="/my/like">나의 찜</NavLink>
        </li>
        <li>
          <NavLink to="/my/write">나의 판매상품</NavLink>
        </li>
        <li>
          <NavLink to="/my/bought">나의 구매상품</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/my" component={ChatContainer} />
        <Route path="/my/like" component={LikeContainer} />
        <Route path="/my/write" component={WriteContainer} />
        <Route path="/my/bought" component={BoughtContainer} />
      </Switch>
    </>
  );
};

export default MyPage;
