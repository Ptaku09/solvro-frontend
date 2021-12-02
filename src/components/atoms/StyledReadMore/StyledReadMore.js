import styled from 'styled-components';
import { ReactComponent as ReadMore } from 'assets/icons/next-svgrepo-com.svg';

export const StyledReadMore = styled(ReadMore)`
  width: ${({ isBig }) => (isBig ? '50px' : '30px')};
  height: ${({ isBig }) => (isBig ? '50px' : '30px')};
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-3px);
    fill: ${({ isBig, theme }) => (isBig ? theme.colors.grey : 'unset')};
  }
`;
