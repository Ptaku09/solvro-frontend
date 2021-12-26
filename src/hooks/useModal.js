import { useState } from 'react';

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

export default useModal;
