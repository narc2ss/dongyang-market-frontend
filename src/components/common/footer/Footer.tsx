import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <address>
        © 2020 · narc2ss (aksrb5149@gmail.com) / dangmil (mguoe5@gmail.com)
      </address>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.lightSolitude};
`;

export default Footer;
