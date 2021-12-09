import React from 'react';
import { StyledRocketIcon, TitleWrapper, TopBarWrapper, Wrapper, Title } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <TopBarWrapper>
        <TitleWrapper href="/">
          <Title>Spaceflight news</Title>
          <StyledRocketIcon />
        </TitleWrapper>
      </TopBarWrapper>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
