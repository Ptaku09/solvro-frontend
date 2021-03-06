import React from 'react';
import useScrollPosition from 'hooks/useScrollPosition';
import { StyledArrowUp, Wrapper } from 'components/molecules/GoToTop/GoToTop.styles';
import PropTypes from 'prop-types';

const GoToTop = ({ path }) => {
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
        <Wrapper path={path} position={scrollPosition} onClick={handleScrollToTop} aria-label="wrapper">
          <StyledArrowUp onClick={handleScrollToTop} />
        </Wrapper>
      ) : null}
    </>
  );
};

GoToTop.propTypes = {
  path: PropTypes.string.isRequired,
};

export default GoToTop;
