import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

export const ModalWrapper = styled(ReactModal).attrs({
  closeTimeoutMS: 500,
})`
  width: 100vw;
  height: 60vh;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 150px;
  outline: none;
  z-index: 5;
  background-color: rgba(200, 200, 200, 0.8);
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: 60%;
  max-width: 600px;
  height: 25%;
  margin: 20px 0;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 250ms;
  cursor: pointer;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    transform: translateY(-3px);
  }
`;
