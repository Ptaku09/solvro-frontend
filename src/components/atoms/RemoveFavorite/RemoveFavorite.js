import styled from 'styled-components';
import { ReactComponent as RemoveFavoriteIcon } from 'assets/icons/remove-button-svgrepo-com.svg';

export const RemoveFavorite = styled(RemoveFavoriteIcon)`
  width: ${({ isbig }) => (isbig ? '50px' : '30px')};
  height: ${({ isbig }) => (isbig ? '50px' : '30px')};
  fill: ${({ isbig, theme }) => (isbig ? theme.colors.darkGrey : 'unset')};
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-3px);
    fill: ${({ isbig, theme }) => (isbig ? theme.colors.grey : 'unset')};
`;
