import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>로그인</h2>
      <label>아이디</label>
      <input type="text" />
      <label>비밀번호</label>
      <input type="password" />
      <button>로그인</button>
      <br />
      <p>
        아이디가 없으신가요? <Link to="signup">계정 만들기</Link>
      </p>
    </>
  );
};

export default Login;
