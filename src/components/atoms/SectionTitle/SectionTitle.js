import styled from 'styled-components';

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.huge};
    margin-top: 0;
  }
`;
