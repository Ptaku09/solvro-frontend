import { ReactComponent as ArrowUp } from 'assets/icons/up-arrow-svgrepo-com.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  animation: appearing 350ms;

  @media only screen and (min-width: 768px) {
    bottom: 40px;
    right: 40px;
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledArrowUp = styled(ArrowUp)`
  width: 50%;
  height: auto;
  fill: ${({ theme }) => theme.colors.white};
`;
