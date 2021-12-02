import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import WrongPath from 'views/WrongPath/WrongPath';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Articles from 'views/Articles/Articles';
import { Provider } from 'react-redux';
import { store } from 'store';
import Favorites from 'views/Favorites/Favorites';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <MainTemplate>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="*" element={<WrongPath />} />
            </Routes>
          </MainTemplate>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default Root;
