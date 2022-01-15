import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, StyledImg, Title, Wrapper } from 'components/molecules/FavoriteElement/FavoriteElement.styles';
import axios from 'axios';
import { RemoveFavorite } from 'components/atoms/RemoveFavorite/RemoveFavorite';
import { ReadMore } from 'components/atoms/ReadMore/ReadMore';
import { handleRemoveFromFavorites } from 'handlers/favorites/favorites';

const FavoriteElement = ({ id, handleOpenArticleDetails }) => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then(({ data }) => {
        setArticle(data);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  return (
    <Wrapper>
      {error ? (
        <Title>Something went wrong</Title>
      ) : (
        <>
          <StyledImg src={article.imageUrl} alt={article.title} />
          <Title>{article.title}</Title>
          <ButtonWrapper>
            <RemoveFavorite isbig="true" onClick={() => handleRemoveFromFavorites(id, true)} />
            <ReadMore isbig="true" onClick={() => handleOpenArticleDetails(id)} />
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
};

FavoriteElement.propTypes = {
  id: PropTypes.number.isRequired,
  handleOpenArticleDetails: PropTypes.func.isRequired,
};

export default FavoriteElement;
