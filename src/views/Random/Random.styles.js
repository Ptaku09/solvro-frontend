import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { Loading } from 'components/atoms/Loading/Loading';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: auto;
  max-height: 100vh;
  min-height: 100vh;
  padding: 50px 25px;

  @media only screen and (min-width: 768px) {
    background-image: url('https://assets.codepen.io/1538474/star.svg'), linear-gradient(to bottom, #05007a, #4d007d);
    background-attachment: fixed;
    height: 100vh;
    min-height: unset;
    width: 100%;
    padding: 50px;
  }
`;

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  margin-top: 40px;
  box-shadow: -3px -3px 10px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  @media only screen and (min-width: 768px) {
    margin-top: 30px;
    width: 90%;
    height: 100%;
    align-items: center;
  }
`;

export const StyledLoading = styled(Loading)`
  box-shadow: -3px -3px 10px 10px rgba(0, 0, 0, 0.1);
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
