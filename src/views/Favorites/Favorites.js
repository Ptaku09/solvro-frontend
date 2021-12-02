import React, { useEffect, useState } from 'react';
import FavoriteElement from 'components/molecules/FavoriteElement/FavoriteElement';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { ContentWrapper, Redirect, Wrapper } from 'views/Favorites/Favorites.styles';

const Favorites = () => {
  const [articlesId, setArticlesId] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    setArticlesId(data);

    setTimeout(() => {
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        {articlesId === null || articlesId.length === 0 ? (
          <SectionTitle>
            No favorites :(
            <Redirect href="/articles">Go to articles</Redirect>
          </SectionTitle>
        ) : (
          <>
            <SectionTitle>Your Favorites</SectionTitle>
            {articlesId.map((item, i) => (
              <FavoriteElement key={item} index={i} id={item} />
            ))}
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Favorites;
