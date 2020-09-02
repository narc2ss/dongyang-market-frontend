import React from "react";

import { Button } from "style/atom";
import userProfile from "static/img/user_42.png";

interface Props {
  onLogout: () => void;
}

const My = ({ onLogout }: Props) => {
  return (
    <>
      <img src={userProfile} alt="userProfile" />
      <h3>narc2ss</h3>
      <Button onClick={onLogout}>로그아웃</Button>
    </>
  );
};

export default My;
