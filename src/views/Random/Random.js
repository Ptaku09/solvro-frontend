import React, { useEffect, useState } from 'react';
import { useGetArticleByIdMutation, useGetArticlesCountQuery } from 'store';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';
import { Title } from 'components/atoms/Title/Title';

const Random = () => {
  const [article, setArticle] = useState({});
  const [getArticle] = useGetArticleByIdMutation();
  const { data, isLoading } = useGetArticlesCountQuery();

  useEffect(() => {
    const fetchData = async () => {
      return isLoading ? null : await getArticle(Math.round(Math.random() * data - 1) + 1);
    };

    fetchData().then((res) => {
      setTimeout(() => {
        window.scrollTo({
          top: 150,
          left: 0,
          behavior: 'smooth',
        });
      }, 250);

      if (res) {
        console.log(res);
        setArticle(res.data);
      }
    });
  }, [data, getArticle, isLoading]);

  return (
    <Wrapper>
      <Reload onClick={() => window.location.reload()}>
        <Title>Another one!</Title>
      </Reload>
      <ArticleDetails data={article} />
    </Wrapper>
  );
};

export default Random;
