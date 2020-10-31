import React from "react";
import { Button, Input } from "style/atom";
import styled from "styled-components";

import { MainTitle } from "components/main/Main";
import { useInputs } from "lib/hooks";
import { WriteType } from "store/post/types";
import { UserType } from "store/user/types";

interface Props {
  onWrite: (payload: WriteType) => void;
  user: UserType;
}

const Write = ({ onWrite, user }: Props) => {
  const { inputs, onChange } = useInputs({
    title: "",
    price: "",
    description: "",
  });
  const { title, price, description } = inputs;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onWrite({
      seller: user.id!,
      title,
      price: parseInt(price, 10),
      description,
    });
  };

  return (
    <>
      <MainTitle>물건 등록</MainTitle>
      <Form onSubmit={onSubmit}>
        <InputWrapper>
          <label>제목</label>
          <Input name="title" value={title} onChange={onChange} />
        </InputWrapper>
        <InputWrapper>
          <label>가격</label>
          <Input name="price" value={price} onChange={onChange} />
        </InputWrapper>
        <InputWrapper>
          <label>설명</label>
          <TextArea
            name="description"
            value={description}
            onChange={onChange}
          />
        </InputWrapper>
        {/* <InputWrapper>
          <label>이미지</label>
          <Input type="file" name="" />
        </InputWrapper> */}
        <RightAligned>
          <Button type="submit" big>
            등록하기
          </Button>
        </RightAligned>
      </Form>
    </>
  );
};

export const Form = styled.form`
  width: 440px;
  margin: 60px auto;
`;

export const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CenterAligned = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    margin-bottom: 1rem;
  }
  & > *:not(label) {
    flex: 6;
    font-size: 1rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  label {
    flex: 1;
    text-align: left;
    padding: 1rem 1rem 0 0;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
  }

  & > * {
    margin-bottom: 0.5rem;
  }
  & > *:not(label) {
    flex: 6;
  }
  & > [type="file"] {
    width: 20px;
  }
`;

export const TextArea = styled.textarea`
  height: 14rem;
  resize: none;
  font-family: "Roboto", sans-serif;
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  font-size: 1.2rem;
  border: 1px solid #dbe3eb;
  padding: 1rem;
`;

export default Write;
