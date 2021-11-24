import React from 'react';
import styled from 'styled-components';

const OptionWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey};
  width: 300px;
  height: 350px;
  margin: 50px;
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
    color: ${({ theme }) => theme.colors.grey};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0 0 15px 15px;
  }

  // &:before {
  //   content: '';
  //   color: ${({ theme }) => theme.colors.grey};
  //   position: absolute;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-size: 1.5rem;
  //   top: 0;
  //   width: 100%;
  //   height: 60px;
  //   background-color: ${({ theme }) => theme.colors.white};
  //   border-radius: 15px 15px 0 0;
  // }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    transform: translateY(-10px);
  }
`;

const StyledA = styled.a`
  display: block;
  text-decoration: none;
`;

const Bookmark = ({ redirectTo, title, Icon }) => {
  return (
    <StyledA href={redirectTo}>
      <OptionWrapper>
        <Icon width="150px" />
        <h3>{title}</h3>
      </OptionWrapper>
    </StyledA>
  );
};

export default Bookmark;
