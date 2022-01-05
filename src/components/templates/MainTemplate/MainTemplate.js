import React, { useEffect, useState } from 'react';
import { StyledRocketIcon, Title, TitleWrapper, TopBarWrapper, Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import Hamburger from 'components/organisms/Hamburger/Hamburger';
import Menu from 'components/organisms/Menu/Menu';
import { useLocation } from 'react-router-dom';
import GoToTop from 'components/molecules/GoToTop/GoToTop';

const MainTemplate = ({ children }) => {
  const location = useLocation();
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <Wrapper>
      <Hamburger path={path} />
      <Menu path={path} />
      <TopBarWrapper>
        <TitleWrapper to="/">
          <Title>Spaceflight news</Title>
          <StyledRocketIcon />
        </TitleWrapper>
      </TopBarWrapper>
      {children}
      <GoToTop path={path} />
    </Wrapper>
  );
};

export default MainTemplate;
