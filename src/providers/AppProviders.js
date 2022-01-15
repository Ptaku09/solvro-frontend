import React from 'react';
import { store } from 'store';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <MainTemplate>
            <GlobalStyle />
            {children}
          </MainTemplate>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppProviders;
