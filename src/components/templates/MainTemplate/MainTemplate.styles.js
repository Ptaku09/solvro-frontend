import styled from 'styled-components';
import { ReactComponent as RocketIcon } from 'assets/icons/rocket-svgrepo-com.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 150px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

export const TitleWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

export const StyledRocketIcon = styled(RocketIcon)`
  width: 80px;
  height: auto;
  margin: 20px;
`;
