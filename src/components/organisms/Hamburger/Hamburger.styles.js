import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Tick = styled.span`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 10px;
  height: 7px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  ${StyledInput}:checked + && {
    transform-origin: bottom;
    width: 50%;
    transform: rotatez(45deg) translate(8px, 0);
  }

  ${StyledInput}:checked:hover + && {
    width: 50%;
  }

  ${StyledInput}:checked + && + && {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  ${StyledInput}:checked + && + && + && {
    transform-origin: bottom;
    width: 50%;
    transform: translate(30px, -11px) rotatez(45deg);
  }
`;

export const Wrapper = styled.label`
  position: fixed;
  top: 45px;
  left: 50px;
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
  z-index: 21;
  animation: appearing 350ms;

  @keyframes appearing {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${Tick}:nth-child(2) {
    width: 50%;
  }

  ${Tick}:nth-child(4) {
    width: 75%;
  }

  &:hover ${Tick} {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &:hover ${Tick}:nth-child(2) {
    width: 100%;
  }

  &:hover ${Tick}:nth-child(4) {
    width: 100%;
  }
`;
