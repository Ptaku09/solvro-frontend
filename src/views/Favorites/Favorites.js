import React, { useEffect, useState } from 'react';
import FavoriteElement from 'components/molecules/FavoriteElement/FavoriteElement';
import styled from 'styled-components';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: auto;
  min-height: 450px;
  margin: 40px 0;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;

const Redirect = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

const Favorites = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    setArticles(data);

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
        {articles === null ? (
          <SectionTitle>
            No favorites :(
            <Redirect href="/articles">Go to articles</Redirect>
          </SectionTitle>
        ) : (
          <>
            <SectionTitle>Your Favorites</SectionTitle>
            {articles.map((item, i) => (
              <FavoriteElement key={item} index={i} id={item} />
            ))}
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Favorites;
