import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'store';
import { StyledInput, Tick, Wrapper } from 'components/organisms/Hamburger/Hamburger.styles';

const Hamburger = () => {
  const isOpen = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <Wrapper>
      <StyledInput onClick={handleOpenMenu} checked={isOpen} readOnly />
      <Tick isOpen={isOpen} />
      <Tick isOpen={isOpen} />
      <Tick isOpen={isOpen} />
    </Wrapper>
  );
};

export default Hamburger;
