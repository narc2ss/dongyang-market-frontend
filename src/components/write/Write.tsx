import React from "react";
import { Button, Input } from "style/atom";
import styled from "styled-components";

import { MainTitle } from "components/main/Main";

const Write = () => {
  return (
    <>
      <MainTitle>물건 등록</MainTitle>
      <Form>
        <InputWrapper>
          <label>제목</label>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <label>가격</label>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <label>설명</label>
          <TextArea name="" />
        </InputWrapper>
        <InputWrapper>
          <label>이미지</label>
          <Input type="file" name="" />
        </InputWrapper>
        <RightAligned>
          <Button big>등록하기</Button>
        </RightAligned>
      </Form>
    </>
  );
};

const Form = styled.form`
  width: 440px;
  margin: 0 auto;
`;

export const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  label {
    flex: 1;
    text-align: right;
    padding: 0.5rem 1rem;
    font-weight: 700;
    font-size: 1.2rem;
  }

  & > * {
    margin-bottom: 1rem;
  }
  & > *:not(label) {
    flex: 6;
  }
  & > [type="file"] {
    width: 20px;
  }
`;

const TextArea = styled.textarea`
  height: 14rem;
  resize: none;
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  font-size: 1.2rem;
  border: 1px solid #dbe3eb;
  padding: 1rem;
`;

export default Write;
