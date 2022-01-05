import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReadMore } from 'components/atoms/ReadMore/ReadMore';
import { handleRemoveFromFavorites } from 'handlers/favorites/favorites';
import { ButtonWrapper, StyledImg, Title, Wrapper } from 'components/molecules/FavoriteElement/FavoriteElement.styles';
import { RemoveFavorite } from 'components/atoms/RemoveFavorite/RemoveFavorite';
import axios from 'axios';

const FavoriteElement = ({ id, handleOpenArticleDetails }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`).then(({ data }) => {
      setArticle(data);
    });
  }, [id]);

  return (
    <Wrapper>
      <StyledImg src={article.imageUrl} alt={article.title} />
      <Title>{article.title}</Title>
      <ButtonWrapper>
        <RemoveFavorite isbig="true" onClick={() => handleRemoveFromFavorites(id, true)} />
        <ReadMore isbig="true" onClick={() => handleOpenArticleDetails(id)} />
      </ButtonWrapper>
    </Wrapper>
  );
};

FavoriteElement.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FavoriteElement;
