import React from 'react';
import { store } from 'store';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

const AppProvidersWithoutTemplate = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

AppProvidersWithoutTemplate.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppProvidersWithoutTemplate;
