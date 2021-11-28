import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey};
  width: 300px;
  height: 350px;
  padding: 50px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: transform 250ms;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0 0 15px 15px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    transform: translateY(-10px);
  }
`;

export const StyledA = styled.a`
  display: block;
  text-decoration: none;
`;
