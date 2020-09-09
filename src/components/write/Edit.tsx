import React from "react";
import { MainTitle } from "components/main/Main";
import { Form, InputWrapper, RightAligned, TextArea } from "./Write";
import { Input, Button, Select } from "style/atom";
import { useInputs } from "lib/hooks";
import { PostType, EditType } from "store/post/types";

interface Props {
  post: PostType;
  onEdit: (payload: EditType) => void;
}

const Edit = ({ post, onEdit }: Props) => {
  console.log(post);
  const { inputs, onChange } = useInputs({
    title: post.title,
    price: post.price,
    description: post.description,
    status: post.status,
  });
  const { title, price, description, status } = inputs;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit({
      id: post.id!,
      seller: post.id!,
      title,
      price: parseInt(price, 10),
      status,
      description,
    });
  };

  return (
    <>
      <MainTitle>물건 수정</MainTitle>
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
          <label>거래상태</label>
          <Select name="status" value={status} onChange={onChange}>
            <option value="0">판매중</option>
            <option value="1">예약중</option>
            <option value="2">거래완료</option>
          </Select>
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
            수정하기
          </Button>
        </RightAligned>
      </Form>
    </>
  );
};

export default Edit;
