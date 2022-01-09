import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
