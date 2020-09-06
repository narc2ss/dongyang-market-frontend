import React from "react";

import { Button } from "style/atom";
import userProfile from "static/img/user_42.png";
import { UserType } from "store/user/types";

interface Props {
  onLogout: () => void;
  user?: UserType;
}

const My = ({ onLogout, user }: Props) => {
  return (
    <>
      <img src={userProfile} alt="userProfile" />
      <h3>{user?.nickname}</h3>
      <Button onClick={onLogout}>로그아웃</Button>
    </>
  );
};

export default My;
