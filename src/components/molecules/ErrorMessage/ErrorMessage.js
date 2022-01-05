import React from 'react';
import { Subtitle, Title, Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';

const ErrorMessage = ({ message, subtitle = '' }) => {
  return (
    <Wrapper>
      <Title>{message}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default ErrorMessage;
