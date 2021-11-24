import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from 'Test';
import HomeScreen from 'views/HomeScreen/HomeScreen';
import WrongPathScreen from 'views/WrongPathScreen/WrongPathScreen';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainTemplate>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<WrongPathScreen />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
