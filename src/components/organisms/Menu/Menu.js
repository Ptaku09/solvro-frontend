import { useDispatch, useSelector } from 'react-redux';
import 'components/organisms/Menu/styles.css';
import { toggleMenu } from 'store';
import { ModalWrapper, StyledLink } from 'components/organisms/Menu/Menu.styles';

const overlay = {
  content: {},
  overlay: { zIndex: 10 },
};

const Menu = () => {
  const isOpen = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <ModalWrapper isOpen={isOpen} style={overlay} appElement={document.getElementById('root')}>
      <StyledLink to="/" onClick={handleCloseMenu}>
        Home
      </StyledLink>
      <StyledLink to="/favorites" onClick={handleCloseMenu}>
        Favorites
      </StyledLink>
      <StyledLink to="/articles" onClick={handleCloseMenu}>
        Articles
      </StyledLink>
      <StyledLink to="/random" onClick={handleCloseMenu}>
        Random
      </StyledLink>
    </ModalWrapper>
  );
};

export default Menu;
