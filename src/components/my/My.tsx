import React from "react";

import { Button } from "style/atom";
import userProfile from "static/img/user_42.png";
import { UserType } from "store/user/types";
import styled from "styled-components";
import { SpaceBetweenMiddle } from "style/layout";

interface Props {
  onLogout: () => void;
  user?: UserType;
}

const My = ({ onLogout, user }: Props) => {
  return (
    <ProfileWrapper>
      <SpaceBetweenMiddle>
        <img src={userProfile} alt="userProfile" />
        <h3>{user?.nickname}</h3>
      </SpaceBetweenMiddle>
      <Button onClick={onLogout}>로그아웃</Button>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(SpaceBetweenMiddle)`
  display: flex;
  align-items: center;
  margin-top: 60px;

  & > div > * {
    margin-right: 0.5rem;
  }

  & > div > h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export default My;
