import React from "react";

import userProfile from "static/img/user_42.png";

const MyContainer = () => {
  return (
    <>
      <img src={userProfile} alt="userProfile" />
      <h3>narc2ss</h3>
      <button>로그아웃</button>
    </>
  );
};

export default MyContainer;
