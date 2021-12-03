import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-3px);
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
