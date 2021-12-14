import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Button } from 'components/atoms/Button/Button';

export const ModalWrapper = styled(ReactModal)`
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

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: -20px;
  width: 150px;
  height: 40px;
  padding: 10px;
`;
