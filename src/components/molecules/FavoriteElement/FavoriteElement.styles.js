import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: row;
  border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.lightGray};
    width: 80%;
    height: auto;
    min-height: 430px;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width: 250px;
  height: 150px;
  margin: 0 20px 0 0;
  border: 1px solid black;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    width: 70vw;
    height: auto;
    margin: 5px 0 0 0;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 70%;
  margin: 0 20px;
  padding: 10px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    margin: 15px 0;
    width: 65vw;
  }
`;

export const ButtonWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;
