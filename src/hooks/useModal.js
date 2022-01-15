import { useState } from 'react';
import PropTypes from 'prop-types';

const useModal = (initialState = false) => {
  const [isModalOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => {
    setModalState(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalState(false);
    document.body.style.overflow = 'unset';
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

useModal.propTypes = {
  initialState: PropTypes.bool,
};

export default useModal;
