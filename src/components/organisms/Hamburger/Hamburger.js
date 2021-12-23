import { useDispatch } from 'react-redux';
import { toggleMenu } from 'store';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StyledInput, Tick, Wrapper } from 'components/organisms/Hamburger/Hamburger.styles';

const Hamburger = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(false);
  }, [location]);

  const handleOpenMenu = () => {
    setStatus((prevState) => !prevState);
    dispatch(toggleMenu());
  };

  return (
    <Wrapper>
      <StyledInput onClick={handleOpenMenu} checked={status} />
      <Tick />
      <Tick />
      <Tick />
    </Wrapper>
  );
};

export default Hamburger;
