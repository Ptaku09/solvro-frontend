import styled from 'styled-components';

export const Loading = styled.div`
  width: 100px;
  height: 100px;
  border: 25px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.grey};
  animation: loading 1.5s linear infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
