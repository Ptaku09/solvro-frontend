import React from 'react';
import { ModalWrapper, overlay, StyledButton } from 'components/organisms/Modal/Modal.styles';
import PropTypes from 'prop-types';

const Modal = ({ children, isOpen, handleCloseModal }) => {
  return (
    <ModalWrapper style={overlay} appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      <StyledButton onClick={handleCloseModal}>Close</StyledButton>
      {children}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
