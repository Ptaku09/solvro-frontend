import React from 'react';
import { ReactComponent as WrongPathIcon } from 'assets/icons/wrong-path.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;

  a {
    text-decoration: none;
  }
`;

const StyledWrongPathIcon = styled(WrongPathIcon)`
  height: 400px;

  #stars {
    fill: black;
  }
`;

const ErrorType = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

const TextWrapper = styled.div`
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

const WrongPathScreen = () => {
  return (
    <Wrapper>
      <StyledWrongPathIcon />
      <TextWrapper>
        <ErrorType>404 Error</ErrorType>
        <h2>Couldn't launch :(</h2>
      </TextWrapper>
    </Wrapper>
  );
};

export default WrongPathScreen;
