import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserType } from "store/user/types";

interface Props {
  user?: UserType;
  onSearch: (keyword: string) => void;
}

const Header = ({ user, onSearch }: Props) => {
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(keyword);
    setKeyword("");
  };

  return (
    <HeaderPositioner>
      <HeaderWrapper>
        <Logo to="/">동양마켓</Logo>
        <form onSubmit={onSubmit}>
          <SearchBar
            type="search"
            name="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="물건을 검색해보세요"
          />
        </form>
        {user!.id ? (
          <ul>
            <li>
              <Link to="/write">물건등록</Link>
            </li>
            <li>
              <Link to="/my">MY</Link>
            </li>
          </ul>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </HeaderWrapper>
    </HeaderPositioner>
  );
};

const HeaderPositioner = styled.header`
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderWrapper = styled.header`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  ul {
    display: flex;
    align-items: center;
    & > li + li {
      margin-left: 1.5rem;
    }
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  font-family: "Sunflower", sans-serif;
  color: ${(props) => props.theme.palette.bunting};
  letter-spacing: 0.24rem;
`;

const SearchBar = styled.input`
  width: 500px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.palette.rockBlue};
  border: 2px solid ${(props) => props.theme.palette.rockBlue};
  border-radius: 20px;
  &::placeholder {
    font-size: 1rem;
    color: ${(props) => props.theme.palette.rockBlue};
  }
`;

export default Header;
