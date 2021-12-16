import React, { useEffect, useState } from 'react';
import { useGetArticleByIdMutation, useGetArticlesCountQuery } from 'store';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';
import { Title } from 'components/atoms/Title/Title';
import { Reload, Wrapper } from 'views/Random/Random.styles';

const articleTemplate = {
  data: {
    imageUrl: 'https://www.datocms-assets.com/55976/1632762571-552-300x200.jpeg',
    title: 'Something went wrong',
    publishedAt: '2021-02-10T21:40:45.000Z',
    summary: 'Try to search once again!',
    url: 'https://www.google.pl/',
  },
};

const Random = () => {
  const [article, setArticle] = useState({});
  const [getArticle] = useGetArticleByIdMutation();
  const { data, isLoading } = useGetArticlesCountQuery();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedArticle = await getArticle(Math.round(Math.random() * data - 1) + 1);
      return fetchedArticle.hasOwnProperty('error') ? articleTemplate : fetchedArticle;
    };

    if (!isLoading) {
      fetchData().then((res) => {
        setTimeout(() => {
          window.scrollTo({
            top: 150,
            left: 0,
            behavior: 'smooth',
          });
        }, 250);

        if (res) {
          setArticle(res.data);
        }
      });
    }
  }, [data, getArticle, isLoading]);

  return (
    <Wrapper>
      <Reload onClick={() => window.location.reload()}>
        <Title>{isLoading ? 'Loading...' : 'Another one!'}</Title>
      </Reload>
      <ArticleDetails
        imageUrl={article.imageUrl}
        title={article.title}
        publishedAt={article.publishedAt}
        desc={article.summary}
        redaMore={article.url}
      />
    </Wrapper>
  );
};

export default Random;
