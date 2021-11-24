import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { StyledRocketIcon, TitleWrapper, TopBarWrapper, Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <TopBarWrapper>
        <TitleWrapper href="/">
          <Title>Space flight news</Title>
          <StyledRocketIcon />
        </TitleWrapper>
      </TopBarWrapper>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
