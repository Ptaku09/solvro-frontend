import React, { useEffect, useState } from 'react';
import { StyledRocketIcon, TitleWrapper, TopBarWrapper, Wrapper, Title } from 'components/templates/MainTemplate/MainTemplate.styles';
import Hamburger from 'components/organisms/Hamburger/Hamburger';
import Menu from 'components/organisms/Menu/Menu';
import { useLocation } from 'react-router-dom';

const MainTemplate = ({ children }) => {
  const location = useLocation();
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <Wrapper>
      {path !== '/' ? <Hamburger /> : null}
      {path !== '/' ? <Menu /> : null}
      <TopBarWrapper>
        <TitleWrapper to="/">
          <Title>Spaceflight news</Title>
          <StyledRocketIcon />
        </TitleWrapper>
      </TopBarWrapper>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
