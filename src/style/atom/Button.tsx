import styled, { css } from "styled-components";

interface ButtonType {
  secondary?: boolean;
  full?: boolean;
  big?: boolean;
  link?: boolean;
}

const Button = styled.button<ButtonType>`
  padding: 0.25rem 1rem;
  background-color: ${(props) => props.theme.palette.secondary};
  color: ${(props) => props.theme.palette.white};
  border: 1px solid ${(props) => props.theme.palette.secondary};
  border-radius: 7px;
  cursor: pointer;

  outline: none;

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${(props) => props.theme.palette.white};
      border: 1px solid ${(props) => props.theme.palette.secondary};
      color: ${(props) => props.theme.palette.secondary};
    `}

  ${(props) =>
    props.link &&
    css`
      border: none;
      background: none;
      color: ${(props) => props.theme.palette.black};
      font-size: 1rem;
      font-weight: 700;
      padding: 0;
    `}

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.big &&
    css`
      background-color: ${(props) => props.theme.palette.secondary};
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}
  &:active {
    transform: translateY(3px);
    transition: ease 0.3s;
  }
`;

export default Button;
