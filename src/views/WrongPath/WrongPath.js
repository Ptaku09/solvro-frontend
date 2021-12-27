import React, { useEffect } from 'react';
import { Wrapper, Mars, StyledIcon404, Title, Subtitle, StyledAstronaut, StyledSpaceship, TextWrapper } from 'views/WrongPath/WrongPath.styles';

//CREDITS: https://codepen.io/AsyrafHussin/pen/KxWRrK

const WrongPath = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth',
      });
    }, 250);
  }, []);

  return (
    <Wrapper>
      <Mars />
      <StyledIcon404 />
      <TextWrapper>
        <Title>Oh no!!</Title>
        <Subtitle>Something goes wrong!</Subtitle>
      </TextWrapper>
      <StyledAstronaut />
      <StyledSpaceship />
    </Wrapper>
  );
};

export default WrongPath;
