import styled from 'styled-components';
import { ReactComponent as ReadMoreIcon } from 'assets/icons/next-svgrepo-com.svg';

export const ReadMore = styled(ReadMoreIcon)`
  width: ${({ isbig }) => (isbig ? '50px' : '30px')};
  height: ${({ isbig }) => (isbig ? '50px' : '30px')};
  fill: ${({ isbig, theme }) => (isbig ? theme.colors.darkGrey : 'unset')};
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-3px);
    fill: ${({ isbig, theme }) => (isbig ? theme.colors.grey : 'unset')};
  }
`;
