import React from 'react';
import { Subtitle, Title, Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message, subtitle = '' }) => {
  return (
    <Wrapper>
      <Title>{message}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default ErrorMessage;
