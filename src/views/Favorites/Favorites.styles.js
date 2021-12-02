import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  height: auto;
  min-height: 450px;
  margin: 40px 0;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const Redirect = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkBlue};
`;
