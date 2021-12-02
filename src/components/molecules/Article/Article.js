import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ButtonWrapper, StyledFavoriteIcon, StyledPhoto, Wrapper } from 'components/molecules/Article/Article.styles';
import { StyledReadMore } from 'components/atoms/StyledReadMore/StyledReadMore';
import { handleAddToFavorites } from 'handlers/favorites/favorites';

const Article = ({ id, title, imgSrc }) => {
  return (
    <Wrapper>
      <StyledPhoto src={imgSrc} alt={title} />
      <Title>{title}</Title>
      <ButtonWrapper>
        <StyledFavoriteIcon onClick={() => handleAddToFavorites(id)} />
        <StyledReadMore onClick={() => console.log('Read more')} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Article;
