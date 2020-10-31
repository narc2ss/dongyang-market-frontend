import React from "react";
import { Link } from "react-router-dom";
import { MainTitle } from "components/main/Main";
import { Form, InputWrapper, CenterAligned } from "../write/Write";
import { Input, Button } from "style/atom";
import styled from "styled-components";

const Signup = () => {
  return (
    <>
      <CenterAlignedDiv>
        <MainTitle>
          <h2>회원가입</h2>
        </MainTitle>
        <Form>
          <InputWrapper>
            <label>이메일</label>
            <Input type="email" name="" />
          </InputWrapper>
          <CenterAligned>
            <Button>인증코드요청</Button>
          </CenterAligned>
          <InputWrapper>
            <label>인증코드</label>
            <Input name="" />
          </InputWrapper>
          <CenterAligned>
            <Button>확인</Button>
          </CenterAligned>
          <InputWrapper>
            <label>아이디</label>
            <Input type="text" />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호</label>
            <Input type="password" />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호 확인</label>
            <Input type="password" />
          </InputWrapper>
          <p>
            회원가입을 하시면 <Link to="login">개인정보 수집 정책</Link> 및{" "}
            <Link to="login">이용약관</Link>에 동의하신것으로 간주됩니다.
          </p>
          <CenterAligned>
            <Button>회원가입</Button>
          </CenterAligned>
          <br />
          <p>
            아이디가 있으신가요? <Link to="login">로그인 하러가기</Link>
          </p>
        </Form>
      </CenterAlignedDiv>
    </>
  );
};

export const CenterAlignedDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.1rem;

  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    color: #4f565e;
    margin: 1rem;
  }
`;

export default Signup;
