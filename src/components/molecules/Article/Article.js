import React, { useEffect } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ButtonWrapper, StyledFavoriteIcon, StyledPhoto, Wrapper } from 'components/molecules/Article/Article.styles';
import { StyledReadMore } from 'components/atoms/StyledReadMore/StyledReadMore';

const Article = ({ id, title, imgSrc }) => {
  const handleAddToFavorites = (id) => {
    const data = JSON.parse(localStorage.getItem('favorites'));

    if (data === null) {
      localStorage.setItem('favorites', JSON.stringify([id]));
    } else if (!data.includes(id)) {
      data.push(id);
      localStorage.setItem('favorites', JSON.stringify(data));
    }
  };

  // useEffect(() => {
  //   localStorage.removeItem('favorites');
  // });

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
