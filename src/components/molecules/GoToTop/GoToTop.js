import React from 'react';
import useScrollPosition from 'hooks/useScrollPosition';
import { StyledArrowUp, Wrapper } from 'components/molecules/GoToTop/GoToTop.styles';

const GoToTop = () => {
  const { scrollPosition } = useScrollPosition();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {scrollPosition >= 350 ? (
        <Wrapper onClick={handleScrollToTop}>
          <StyledArrowUp onClick={handleScrollToTop} />
        </Wrapper>
      ) : null}
    </>
  );
};

export default GoToTop;