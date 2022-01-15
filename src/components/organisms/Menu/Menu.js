import 'assets/styles/modalStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'store';
import { ModalWrapper, overlay, StyledLink } from 'components/organisms/Menu/Menu.styles';
import PropTypes from 'prop-types';

const Menu = ({ path }) => {
  const isOpen = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(toggleMenu());
    document.body.style.overflow = 'unset';
  };

  return (
    <ModalWrapper path={path} isOpen={isOpen} onRequestClose={handleCloseMenu} style={overlay} appElement={document.getElementById('root')}>
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

Menu.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Menu;
