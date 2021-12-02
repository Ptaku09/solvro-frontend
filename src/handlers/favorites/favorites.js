export const handleAddToFavorites = (id) => {
  const data = JSON.parse(localStorage.getItem('favorites'));

  if (data === null) {
    localStorage.setItem('favorites', JSON.stringify([id]));
  } else if (!data.includes(id)) {
    data.push(id);
    localStorage.setItem('favorites', JSON.stringify(data));
  }
};

export const handleRemoveFromFavorites = (id, page = null) => {
  const data = JSON.parse(localStorage.getItem('favorites'));

  if (data.includes(id)) {
    data.splice(data.indexOf(id), 1);
    localStorage.setItem('favorites', JSON.stringify(data));

    if (page) {
      window.location.reload(false);
    }
  }
};
