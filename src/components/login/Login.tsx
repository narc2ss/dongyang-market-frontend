import React from "react";
import { Link } from "react-router-dom";

import { useInputs } from "lib/hooks";
import { MainTitle } from "components/main/Main";
import { Form, InputWrapper, RightAligned } from "../write/Write";
import { Input, Button } from "style/atom";
import styled from "styled-components";

interface Props {
  onLogin: (payload: any) => void;
}

const Login = ({ onLogin }: Props) => {
  const { inputs, onChange } = useInputs({
    nickname: "",
    password: "",
  });
  const { nickname, password } = inputs;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(inputs);
  };
  return (
    <>
      <MainTitle>로그인</MainTitle>
      <Form onSubmit={onSubmit}>
        <InputWrapper>
          <label>닉네임</label>
          <Input name="nickname" value={nickname} onChange={onChange} />
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </InputWrapper>
        <RightAligned>
          <Button big>로그인</Button>
        </RightAligned>
        <br />
        <CenterAligned>
          <p>
            아이디가 없으신가요? <Link to="/signup">계정 만들기</Link>
          </p>
        </CenterAligned>
        <CenterAligned>
          <p>
            비밀번호를 잊으셨나요? <Link to="#">비밀번호 재설정</Link>
          </p>
        </CenterAligned>
      </Form>
    </>
  );
};

export const CenterAligned = styled.div`
  text-align: center;
  & + & {
    margin-top: 1rem;
  }
`;

export default Login;
