import styled from 'styled-components';
import { ReactComponent as FavoriteIcon } from 'assets/icons/add-to-favourites-svgrepo-com.svg';
import { Title } from 'components/atoms/Title/Title';

export const StyledPhoto = styled.img`
  width: 100%;
  height: 55%;
  margin-top: 5px;
  object-fit: cover;
  border: 5px solid ${({ theme }) => theme.colors.black};
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  transition: transform 250ms;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    height: 30vh;
  }
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  width: 30px;
  height: 30px;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  height: 58vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  padding: 20px;
  transition: transform 250ms;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    transform: translateY(-10px);
    fill: ${({ theme }) => theme.colors.white};

    ${Title} {
      color: ${({ theme }) => theme.colors.white};
    }

    ${StyledPhoto} {
      border: 5px solid ${({ theme }) => theme.colors.white};
    }
  }

  @media only screen and (min-width: 786px) {
    width: 28vw;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;
