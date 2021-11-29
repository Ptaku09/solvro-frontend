import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ButtonWrapper, StyledFavoriteIcon, StyledPhoto, StyledReadMore, Wrapper } from 'components/molecules/Article/Article.styles';

const Article = ({ title, imgSrc }) => {
  return (
    <Wrapper>
      <StyledPhoto src={imgSrc} alt={title} />
      <Title>{title}</Title>
      <ButtonWrapper>
        <StyledFavoriteIcon onClick={() => console.log('Add to fvr')} />
        <StyledReadMore onClick={() => console.log('Read more')} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Article;
