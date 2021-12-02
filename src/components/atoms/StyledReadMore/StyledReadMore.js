import styled from 'styled-components';
import { ReactComponent as ReadMore } from 'assets/icons/next-svgrepo-com.svg';

export const StyledReadMore = styled(ReadMore)`
  width: ${({ isbig }) => (isbig ? '50px' : '30px')};
  height: ${({ isbig }) => (isbig ? '50px' : '30px')};
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-3px);
    fill: ${({ isbig, theme }) => (isbig ? theme.colors.grey : 'unset')};
  }
`;
