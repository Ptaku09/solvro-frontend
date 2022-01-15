import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Tick = styled.span`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  height: ${({ isOpen }) => (isOpen ? '7px' : '11px')};
  margin: 7px 0;
  border-radius: 10px;
  border: ${({ isOpen, theme }) => (isOpen ? 'unset' : `2px solid ${theme.colors.white}`)};
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
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
  top: 15px;
  left: 15px;
  display: ${({ path }) => (path !== '/' ? 'flex' : 'none')};
  flex-direction: column;
  width: 70px;
  cursor: pointer;
  z-index: 21;
  animation: appearing 350ms;
  transform: scale(0.7);

  @media only screen and (min-width: 768px) {
    top: 45px;
    left: 50px;
    transform: unset;
  }

  @keyframes appearing {
    0% {
      opacity: 0;
      display: none;
    }

    100% {
      opacity: 1;
      display: flex;
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
