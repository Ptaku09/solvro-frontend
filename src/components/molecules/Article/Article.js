import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { ButtonWrapper, StyledFavoriteIcon, StyledPhoto, Wrapper } from 'components/molecules/Article/Article.styles';
import { ReadMore } from 'components/atoms/ReadMore/ReadMore';
import { handleAddToFavorites, handleRemoveFromFavorites } from 'handlers/favorites/favorites';
import { RemoveFavorite } from 'components/atoms/RemoveFavorite/RemoveFavorite';

const Article = ({ id, title, imgSrc, handleOpenArticleDetails }) => {
  const [status, setStatus] = useState('normal');

  useEffect(() => {
    const data = localStorage.getItem('favorites');

    if (data && data.includes(id)) {
      setStatus('favorite');
    }
  }, [id]);

  const handleRemove = (e) => {
    e.stopPropagation();
    setStatus('normal');
    handleRemoveFromFavorites(id);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setStatus('favorite');
    handleAddToFavorites(id);
  };

  return (
    <Wrapper onClick={() => handleOpenArticleDetails(id)}>
      <StyledPhoto src={imgSrc} alt={title} />
      <Title>{title}</Title>
      <ButtonWrapper>
        {status === 'favorite' ? <RemoveFavorite onClick={handleRemove} /> : <StyledFavoriteIcon onClick={handleAdd} />}
        <ReadMore onClick={() => handleOpenArticleDetails(id)} />
      </ButtonWrapper>
    </Wrapper>
  );
};

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  handleOpenArticleDetails: PropTypes.func.isRequired,
};

export default Article;
