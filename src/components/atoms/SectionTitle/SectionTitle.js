import styled from 'styled-components';

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.huge};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-top: 60px;
  }
`;
