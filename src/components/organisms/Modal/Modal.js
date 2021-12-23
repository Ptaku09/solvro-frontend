import React from 'react';
import { ModalWrapper, StyledButton } from 'components/organisms/Modal/Modal.styles';
import PropTypes from 'prop-types';

const overlay = {
  content: {},
  overlay: { zIndex: 1000 },
};

const Modal = ({ children, isOpen, handleCloseModal }) => {
  return (
    <ModalWrapper style={overlay} appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      <StyledButton onClick={handleCloseModal}>Close</StyledButton>
      {children}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
};

export default Modal;
