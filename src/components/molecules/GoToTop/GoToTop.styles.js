import { ReactComponent as ArrowUp } from 'assets/icons/up-arrow-svgrepo-com.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: ${({ path }) => (path !== '/' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  animation: appearing 350ms;
  transition: display ease-in-out;
  transition-duration: 350ms;

  @media only screen and (min-width: 768px) {
    bottom: 40px;
    right: 40px;
    width: 70px;
    height: 70px;
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
