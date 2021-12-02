import React, { useEffect, useState } from 'react';
import { useGetArticleByIdMutation } from 'store';
import { StyledReadMore } from 'components/atoms/StyledReadMore/StyledReadMore';
import { handleRemoveFromFavorites } from 'handlers/favorites/favorites';
import { ButtonWrapper, Index, StyledRemoveFavorite, Title, Wrapper } from 'components/molecules/FavoriteElement/FavoriteElement.styles';

const FavoriteElement = ({ id, index }) => {
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
      <Index>{index + 1}.</Index>
      <Title>{article.title}</Title>
      <ButtonWrapper>
        <StyledRemoveFavorite onClick={() => handleRemoveFromFavorites(id)} />
        <StyledReadMore isbig onClick={() => console.log('Read more')} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FavoriteElement;
