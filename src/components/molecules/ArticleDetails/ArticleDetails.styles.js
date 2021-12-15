import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    top: 80px;
    width: 85%;
    min-height: 80%;
    height: auto;
  }
`;

export const PhotoWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPhoto = styled.img`
  width: 100%;
  height: 75vh;
  max-height: 80%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    height: 25vh;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    margin: 5px 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.grey};

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const DataWrapper = styled.div`
  margin-left: 30px;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
    width: 80%;
  }
`;

export const Link = styled.h5`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkBlue};

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
