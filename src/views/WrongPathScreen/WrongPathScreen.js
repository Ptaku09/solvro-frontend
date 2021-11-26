import React from 'react';
import { ErrorType, StyledWrongPathIcon, TextWrapper, Wrapper } from 'views/WrongPathScreen/WrongPathScreen.styles';

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
