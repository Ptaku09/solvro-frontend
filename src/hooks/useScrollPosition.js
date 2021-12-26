import { useEffect, useState } from 'react';

const useScrollPosition = (initialState = 0) => {
  const [scrollPosition, setScrollPosition] = useState(initialState);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return {
    scrollPosition,
  };
};

export default useScrollPosition;
