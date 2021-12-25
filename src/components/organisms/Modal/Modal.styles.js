import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Button } from 'components/atoms/Button/Button';

export const overlay = {
  content: {},
  overlay: {
    zIndex: 1000,
    transition: 'all 250ms ease-in-out',
    transform: 'translateX(0vw)',
  },
};

export const ModalWrapper = styled(ReactModal).attrs({
  closeTimeoutMS: 250,
})`
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  max-width: 95vw;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (min-width: 768px) {
    max-width: unset;
    max-height: unset;
    overflow-y: unset;
    overflow-x: unset;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 10px;
  width: 150px;
  height: 40px;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    top: -20px;
  }
`;
