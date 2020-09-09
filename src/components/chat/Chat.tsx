import React from "react";
import styled from "styled-components";
import { Button } from "style/atom";

const Chat = () => {
  return (
    <ChatContainer>
      <ChatWrapper>
        <ChatHeader></ChatHeader>
        <ChatBody></ChatBody>
        <ChatForm action="">
          <input type="text" placeholder="메시지를 입력해주세요." />
          <Button>보내기</Button>
        </ChatForm>
      </ChatWrapper>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  width: 300px;
  height: 400px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: white;
  /* border: 2px solid ${(props) => props.theme.palette.secondary}; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.palette.secondary};
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 1rem;
  overflow: scroll;
`;

const ChatForm = styled.form`
  display: flex;

  input {
    flex: 1;
    border: none;
    padding: 0.5rem;
    /* border-top: 2px solid ${(props) => props.theme.palette.secondary}; */
    color: ${(props) => props.theme.palette.gray};
  }
`;

export default Chat;
