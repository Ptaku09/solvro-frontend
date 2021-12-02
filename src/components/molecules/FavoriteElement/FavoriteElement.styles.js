import styled from 'styled-components';
import { ReactComponent as RemoveFavorite } from 'assets/icons/remove-button-svgrepo-com.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: row;
  border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const Index = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 70%;
`;

export const ButtonWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;

export const StyledRemoveFavorite = styled(RemoveFavorite)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    fill: ${({ theme }) => theme.colors.grey};
    transform: translateY(-3px);
  }
`;
