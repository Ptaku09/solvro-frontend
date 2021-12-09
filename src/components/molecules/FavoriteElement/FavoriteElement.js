import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetArticleByIdMutation } from 'store';
import { ReadMore } from 'components/atoms/ReadMore/ReadMore';
import { handleRemoveFromFavorites } from 'handlers/favorites/favorites';
import { ButtonWrapper, StyledImg, Title, Wrapper } from 'components/molecules/FavoriteElement/FavoriteElement.styles';
import { RemoveFavorite } from 'components/atoms/RemoveFavorite/RemoveFavorite';

const FavoriteElement = ({ id, handleOpenArticleDetails }) => {
  const [getArticle] = useGetArticleByIdMutation();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const collectData = async () => {
      return await getArticle(id);
    };

    collectData().then((res) => setArticle(res.data));
  }, [getArticle, id]);

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
