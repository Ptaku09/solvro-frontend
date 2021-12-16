import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: auto;
  max-height: 100vh;
  min-height: 100vh;
  padding: 50px;

  @media only screen and (min-width: 768px) {
    display: unset;
    justify-content: unset;
    align-items: unset;
    height: 100vh;
    min-height: unset;
    width: 100%;
  }
`;

export const Reload = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
  width: 160px;
  height: 60px;
  z-index: 0;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  box-shadow: -3px -3px 10px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};

    ${Title} {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media only screen and (min-width: 768px) {
    right: 45%;
  }
`;
