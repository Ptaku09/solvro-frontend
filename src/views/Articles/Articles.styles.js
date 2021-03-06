import styled from 'styled-components';
import { ReactComponent as ReloadIcon } from 'assets/icons/reload-svgrepo-com.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('https://assets.codepen.io/1538474/star.svg'), linear-gradient(to bottom, #05007a, #4d007d);
  background-attachment: fixed;
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  &::before {
    content: '';
    width: 80%;
    border-top: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const Reload = styled.div`
  position: absolute;
  top: 0;
  right: 3%;
  width: 60px;
  height: 60px;
  z-index: 0;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  box-shadow: -3px -3px 10px 10px rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 300px) {
    right: 10%;
  }

  @media only screen and (min-width: 768px) {
    right: 50px;
  }
`;

export const StyledReloadIcon = styled(ReloadIcon)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    animation: loading 1s ease-in-out;

    @keyframes loading {
      to {
        transform: rotate(-360deg);
      }
    }
  }
`;

export const Amount = styled.div`
  position: absolute;
  top: 0;
  left: 3%;
  width: 200px;
  height: 60px;
  z-index: 0;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  box-shadow: -3px -3px 10px 10px rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 300px) {
    left: 10%;
  }

  @media only screen and (min-width: 768px) {
    left: unset;
    right: 150px;
  }
`;

export const DropdownContainer = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-decoration: none;
  border-radius: 5px;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;

  &:hover {
    ${DropdownContainer} {
      display: block;
    }
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Option = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
