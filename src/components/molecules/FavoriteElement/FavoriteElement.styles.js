import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  height: auto;
  min-height: 430px;
  border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGray};

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 30vh;
    min-height: unset;
    flex-direction: row;
    background-color: unset;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width: 70vw;
  height: auto;
  margin: 5px 0 0 0;
  border: 1px solid black;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 768px) {
    width: 17vw;
    height: 20vh;
    margin: 0 20px 0 0;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 65vw;
  margin: 15px 0;
  padding: 10px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 768px) {
    margin: 0 20px;
    width: 70%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;
