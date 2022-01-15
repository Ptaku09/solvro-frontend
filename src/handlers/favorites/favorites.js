import PropTypes from 'prop-types';

export const handleAddToFavorites = (id) => {
  const data = JSON.parse(localStorage.getItem('favorites'));

  if (data === null) {
    localStorage.setItem('favorites', JSON.stringify([id]));
  } else if (!data.includes(id)) {
    data.unshift(id);
    localStorage.setItem('favorites', JSON.stringify(data));
  }
};

export const handleRemoveFromFavorites = (id, reload = false) => {
  const data = JSON.parse(localStorage.getItem('favorites'));

  if (data.includes(id)) {
    data.splice(data.indexOf(id), 1);
    localStorage.setItem('favorites', JSON.stringify(data));

    if (reload) {
      window.location.reload();
    }
  }
};

handleAddToFavorites.propTypes = {
  id: PropTypes.number.isRequired,
};

handleRemoveFromFavorites.propTypes = {
  id: PropTypes.number.isRequired,
  reload: PropTypes.bool,
};
