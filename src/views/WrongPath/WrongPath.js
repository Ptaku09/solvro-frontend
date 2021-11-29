import React from 'react';
import { ErrorType, StyledWrongPathIcon, TextWrapper, Wrapper } from 'views/WrongPath/WrongPath.styles';

const WrongPath = () => {
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

export default WrongPath;
