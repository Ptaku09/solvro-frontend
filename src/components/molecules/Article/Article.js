import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { ButtonWrapper, StyledFavoriteIcon, StyledPhoto, Wrapper } from 'components/molecules/Article/Article.styles';
import { ReadMore } from 'components/atoms/ReadMore/ReadMore';
import { handleAddToFavorites, handleRemoveFromFavorites } from 'handlers/favorites/favorites';
import { RemoveFavorite } from 'components/atoms/RemoveFavorite/RemoveFavorite';

const Article = ({ id, title, imgSrc }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('favorites');

    if (data && data.includes(id)) {
      setStatus('favorite');
    } else if (data) {
      setStatus('normal');
    }
  }, [id]);

  return (
    <Wrapper>
      <StyledPhoto src={imgSrc} alt={title} />
      <Title>{title}</Title>
      <ButtonWrapper>
        {status === 'favorite' ? (
          <RemoveFavorite
            onClick={() => {
              handleRemoveFromFavorites(id);
              setStatus('normal');
            }}
          />
        ) : (
          <StyledFavoriteIcon
            onClick={() => {
              handleAddToFavorites(id);
              setStatus('favorite');
            }}
          />
        )}
        <ReadMore onClick={() => console.log('Read more')} />
      </ButtonWrapper>
    </Wrapper>
  );
};

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Article;
