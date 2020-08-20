import styled, { css } from "styled-components";

interface ButtonType {
  secondary?: boolean;
  full?: boolean;
  big?: boolean;
}

const Button = styled.button<ButtonType>`
  padding: 0.25rem 1rem;
  background-color: #2C698D;
  color: #fff;
  border: 1px solid #2C698D;
  /* border-radius: 7px; */
  cursor: pointer;

  outline: none;

  ${(props) =>
    props.secondary &&
    css`
      background-color: #fff;
      border: 1px solid #2c698d;
      color: #2c698d;
    `}
  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.big &&
    css`
      background-color: #2c698d;
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}
  &:active {
    transform: translateY(3px);
    transition: ease .3s;
  }
`;

export default Button;
