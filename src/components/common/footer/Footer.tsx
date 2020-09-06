import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <address>© 2020 · 동양마켓 (public.dongyangmarket@gmail.com)</address>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.lavenderBlue};
`;

export default Footer;
