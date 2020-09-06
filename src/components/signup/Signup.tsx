import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h2>회원가입</h2>
      <label>이메일입력</label>
      <input type="email" name="" />
      <button>확인</button>
      <label>인증코드입력</label>
      <input name="" />
      <button>확인</button>
      <label>아이디</label>
      <input type="text" />
      <label>비밀번호</label>
      <input type="password" />
      <label>비밀번호 확인</label>
      <input type="password" />
      <p>
        회원가입을 하시면 <Link to="login">개인정보 수집 정책</Link> 및{" "}
        <Link to="login">이용약관</Link>에 동의하신것으로 간주됩니다.
      </p>
      <button>회원가입</button>
      <br />
      <p>
        아이디가 있으신가요? <Link to="login">로그인 하러가기</Link>
      </p>
    </>
  );
};

export default Signup;
