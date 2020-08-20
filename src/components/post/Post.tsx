import React from "react";

import profile from "static/img/user_42.png";
import product from "static/img/product.png";
import PostCardContainer from "containers/util/post/PostCardContainer";
import { Link } from "react-router-dom";

const me = false;

const Post = () => {
  return (
    <>
      <h2>에어팟 프로</h2>
      <img src={profile} alt="profile" />
      <h3>choi</h3>
      <span>3일전</span>
      <span>조회수 323</span>
      {me ? (
        <>
          <Link to="/write/3">수정</Link>
          <button>삭제</button>
        </>
      ) : (
        <>
          <button>채팅하기</button>
          <span>찜 80</span>
        </>
      )}
      <img src={product} alt="product" />
      <h4>100,000원</h4>
      <p>미공개 에어팟 팔아요 3호관에서 직거래 합니다.</p>
      <h5>다른제품</h5>
      <PostCardContainer />
    </>
  );
};

export default Post;
