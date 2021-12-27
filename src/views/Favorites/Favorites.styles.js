import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://assets.codepen.io/1538474/star.svg'), linear-gradient(to bottom, #05007a, #4d007d);
  background-attachment: fixed;

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledSectionTitle = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ContentWrapper = styled.div`
  width: 80%;
  height: auto;
  min-height: unset;
  padding: 20px;
  margin: 40px 0;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 70%;
    min-height: 450px;
    padding: 50px;
    align-items: unset;
  }
`;

export const Redirect = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkBlue};
`;
