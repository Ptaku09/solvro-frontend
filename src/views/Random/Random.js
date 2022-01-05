import React, { useEffect, useState } from 'react';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';
import { Title } from 'components/atoms/Title/Title';
import { ContentWrapper, Reload, StyledLoading, Wrapper } from 'views/Random/Random.styles';
import axios from 'axios';

const articleTemplate = {
  imageUrl: 'https://www.datocms-assets.com/55976/1632762571-552-300x200.jpeg',
  title: 'Something went wrong',
  publishedAt: '2021-02-10T21:40:45.000Z',
  summary: 'Try to search once again!',
  url: 'https://www.google.pl/',
};

const Random = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.spaceflightnewsapi.net/v3/articles/count')
      .then(({ data }) => {
        axios
          .get(`https://api.spaceflightnewsapi.net/v3/articles/${Math.round(Math.random() * data - 1) + 1}`)
          .then(({ data }) => {
            setArticle(data);
            setLoading(false);
          })
          .catch(() => {
            setArticle(articleTemplate);
            setLoading(false);
          });
      })
      .catch(() => {
        setArticle(articleTemplate);
        setLoading(false);
      });

    setTimeout(() => {
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth',
      });
    }, 250);
  }, []);

  return (
    <Wrapper>
      <Reload onClick={() => window.location.reload()}>
        <Title>{isLoading ? 'Loading...' : 'Another one!'}</Title>
      </Reload>
      <ContentWrapper isLoading={isLoading}>
        {isLoading ? (
          <StyledLoading />
        ) : (
          <ArticleDetails
            imageUrl={article.imageUrl}
            title={article.title}
            publishedAt={article.publishedAt}
            desc={article.summary}
            readMore={article.url}
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Random;
