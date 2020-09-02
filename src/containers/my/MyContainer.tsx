import React from "react";

import userProfile from "static/img/user_42.png";
import { Button } from "style/atom";

const MyContainer = () => {
  return (
    <>
      <img src={userProfile} alt="userProfile" />
      <h3>narc2ss</h3>
      <Button>로그아웃</Button>
    </>
  );
};

export default MyContainer;
