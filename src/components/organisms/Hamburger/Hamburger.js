import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'store';
import { StyledInput, Tick, Wrapper } from 'components/organisms/Hamburger/Hamburger.styles';
import useScrollPosition from 'hooks/useScrollPosition';

const Hamburger = () => {
  const isOpen = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const { scrollPosition } = useScrollPosition();

  const handleOpenMenu = () => {
    dispatch(toggleMenu());
    document.body.style.overflow === 'hidden' ? (document.body.style.overflow = 'unset') : (document.body.style.overflow = 'hidden');
  };

  return (
    <>
      {scrollPosition >= 150 || window.screen.width > 768 ? (
        <Wrapper>
          <StyledInput onClick={handleOpenMenu} checked={isOpen} readOnly />
          <Tick isOpen={isOpen} />
          <Tick isOpen={isOpen} />
          <Tick isOpen={isOpen} />
        </Wrapper>
      ) : null}
    </>
  );
};

export default Hamburger;