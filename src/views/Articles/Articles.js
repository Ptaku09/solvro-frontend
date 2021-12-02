import React, { useEffect } from 'react';
import { useGetArticlesQuery } from 'store';
import Article from 'components/molecules/Article/Article';
import { Loading } from 'components/atoms/Loading/Loading';
import { ArticlesWrapper, ContentWrapper, Reload, StyledReloadIcon, Wrapper } from 'views/Articles/Articles.styles';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

const Articles = () => {
  const { data, isLoading } = useGetArticlesQuery();

  useEffect(() => {
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
      <Reload onClick={() => window.location.reload(false)}>
        <StyledReloadIcon />
      </Reload>
      {isLoading ? (
        <Loading />
      ) : (
        <ContentWrapper>
          <SectionTitle>Discover Space</SectionTitle>
          <ArticlesWrapper>
            {data.length > 0 ? data.map(({ id, title, imageUrl }) => <Article key={id} id={id} title={title} imgSrc={imageUrl} />) : null}
          </ArticlesWrapper>
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default Articles;
