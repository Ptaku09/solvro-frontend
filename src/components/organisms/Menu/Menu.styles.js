import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

export const overlay = {
  content: {},
  overlay: {
    zIndex: 10,
    backgroundColor: 'transparent',
  },
};

export const ModalWrapper = styled(ReactModal).attrs({
  closeTimeoutMS: 500,
})`
  width: 100vw;
  height: 100vh;
  min-height: 200px;
  display: ${({ path }) => (path !== '/' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  outline: none;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 100px 0 60px 0;

  @media only screen and (min-width: 768px) {
    width: 40vw;
    background-color: rgba(200, 200, 200, 0.9);
  }
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: 60%;
  max-width: 600px;
  height: 15%;
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
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    transform: translateY(-3px);
  }
`;
