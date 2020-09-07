import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import profile from "static/img/user_42.png";
import product from "static/img/product.png";
import PostCardContainer from "containers/util/post/PostCardContainer";
import postStore from "store/post";
import { SubTitle } from "components/main/Main";
import {
  SpaceBetween,
  SpaceBetweenMiddle,
  RowLayout,
  RowLayoutMiddle,
} from "../../style/layout";
import { Button } from "style/atom";
import { PostType } from "store/post/types";
import { UserType } from "store/user/types";
import { setPostStatus, setComma } from "lib";
import ChatContainer from "containers/chat/ChatContainer";

interface Props {
  post?: PostType;
  postStore?: postStore;
  user?: UserType;
}

const Post = ({ post, user, postStore }: Props) => {
  const [isSeller] = useState(user?.id === post?.seller);
  const [chatToggle, setChatToggle] = useState(false);
  const onChatToggle = () => {
    setChatToggle(!chatToggle);
  };
  // if (!post) return <h1>loading</h1>;
  return (
    <>
      <PostContainer>
        <SpaceBetweenMiddle>
          <RowLayout>
            <PostTitle>{post?.title}</PostTitle>
            <PostStatus>{setPostStatus(post?.status)}</PostStatus>
          </RowLayout>
          <PostPrice>{setComma(post?.price)}원</PostPrice>
        </SpaceBetweenMiddle>
        <SpaceBetweenMiddle>
          <ProfileLayout>
            <img src={profile} alt="profile" />
            <div>
              <h3>{post?.seller}</h3>
              <div>
                <span>조회수 323회</span>
                <span>·</span>
                <span>찜 80</span>
                <span>·</span>
                <span>{post?.createdAt}</span>
              </div>
            </div>
          </ProfileLayout>

          {isSeller ? (
            <PostOption>
              <Link to="/write/3">수정</Link>
              <Button link>삭제</Button>
            </PostOption>
          ) : (
            <PostOption>
              <Button secondary>찜하기</Button>

              <Button secondary onClick={onChatToggle}>
                채팅
              </Button>
              {chatToggle && <ChatContainer />}
            </PostOption>
          )}
        </SpaceBetweenMiddle>
        <ImageDescriptionWrapper>
          <img src={product} alt="product" />
          <div>
            <p>{post?.description}</p>
          </div>
        </ImageDescriptionWrapper>
      </PostContainer>
      <SubTitle>다른제품</SubTitle>
      <PostCardContainer posts={postStore?.posts} />
    </>
  );
};

const PostContainer = styled.div`
  margin: 3rem auto 5rem;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  & > div + div {
    margin-top: 1.5rem;
  }
`;

const ProfileLayout = styled(RowLayoutMiddle)`
  img {
    margin-right: 0.5rem;
  }

  & > div {
    height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme.palette.linkWater};
      font-weight: 700;
      margin-right: 0.5rem;
    }
  }

  h3 {
    color: ${(props) => props.theme.palette.black};
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const PostTitle = styled.h2`
  margin-right: 0.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.black};
  font-weight: 700;
`;

const PostPrice = styled.h4`
  font-size: 1.25rem;
  color: ${(props) => props.theme.palette.secondary};
  font-weight: 700;
`;

const PostStatus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.secondary};
  color: #fff;
  font-weight: 500;
  padding: 0.325rem;
  font-size: 0.75rem;
`;

const ImageDescriptionWrapper = styled(SpaceBetween)`
  img {
    flex: 1;
    margin-right: 0.75rem;
  }

  div {
    flex: 1;
    margin-left: 0.75rem;

    p {
      line-height: 1.5rem;
    }
  }
`;

const PostOption = styled.div`
  & > * + * {
    margin-left: 0.5rem;
  }
`;

export default inject("postStore")(observer(Post));
