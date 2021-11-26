import styled from 'styled-components';
import { ReactComponent as WrongPathIcon } from 'assets/icons/wrong-path.svg';

export const Wrapper = styled.div`
  background-color: black;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;

  a {
    text-decoration: none;
  }
`;

export const StyledWrongPathIcon = styled(WrongPathIcon)`
  height: 400px;

  #stars {
    fill: black;
  }
`;

export const ErrorType = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const TextWrapper = styled.div`
  opacity: 0;
  animation: appear 1s ease-in forwards;
  animation-delay: 1.2s;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
