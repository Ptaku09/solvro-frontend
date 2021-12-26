import { useEffect, useState } from 'react';

const useScrollPosition = (initialState = 0) => {
  const [scrollPosition, setScrollPosition] = useState(initialState);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollPosition(window.scrollY));

    return () => {
      window.removeEventListener('scroll', () => setScrollPosition(window.scrollY));
    };
  }, []);

  return {
    scrollPosition,
  };
};

export default useScrollPosition;
