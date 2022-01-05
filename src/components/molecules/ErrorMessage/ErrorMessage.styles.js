import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 450px;
    height: 250px;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
  margin: 10px;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 0;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  margin: 0;
`;
