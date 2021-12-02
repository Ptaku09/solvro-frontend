import styled from 'styled-components';

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.huge};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
