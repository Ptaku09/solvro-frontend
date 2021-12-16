import React, { useEffect, useState } from 'react';
import { useGetArticleByIdMutation, useGetArticlesMutation } from 'store';
import Article from 'components/molecules/Article/Article';
import { Loading } from 'components/atoms/Loading/Loading';
import {
  Amount,
  ArticlesWrapper,
  Button,
  ContentWrapper,
  Dropdown,
  DropdownContainer,
  Option,
  Reload,
  StyledReloadIcon,
  Wrapper,
} from 'views/Articles/Articles.styles';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';

const Articles = () => {
  const [getArticles, props] = useGetArticlesMutation();
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});
  const [onPage, setOnPage] = useState(10);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [getArticle] = useGetArticleByIdMutation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(onPage);
      setArticles(data.data);
    };

    fetchData().then(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 150,
          left: 0,
          behavior: 'smooth',
        });
      }, 250);
    });
  }, [getArticles, onPage]);

  const handleOnPageChange = (amount) => {
    setOnPage(amount);
  };

  const handleOpenArticleDetails = async (id) => {
    const article = await getArticle(id);

    setCurrentArticle(article.data);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <Amount>
        <Dropdown>
          <Button>On page: {onPage}</Button>
          <DropdownContainer>
            <Option onClick={() => handleOnPageChange(10)}>10</Option>
            <Option onClick={() => handleOnPageChange(20)}>20</Option>
            <Option onClick={() => handleOnPageChange(30)}>30</Option>
            <Option onClick={() => handleOnPageChange(40)}>40</Option>
            <Option onClick={() => handleOnPageChange(50)}>50</Option>
          </DropdownContainer>
        </Dropdown>
      </Amount>
      <Reload onClick={() => window.location.reload()}>
        <StyledReloadIcon />
      </Reload>
      {props.isLoading ? (
        <Loading />
      ) : (
        <ContentWrapper>
          <SectionTitle>Discover Space</SectionTitle>
          <ArticlesWrapper>
            {articles && articles.length > 0
              ? articles.map(({ id, title, imageUrl }) => (
                  <Article key={id} id={id} title={title} imgSrc={imageUrl} handleOpenArticleDetails={handleOpenArticleDetails} />
                ))
              : null}
          </ArticlesWrapper>
        </ContentWrapper>
      )}
      <Modal isOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <ArticleDetails
          imageUrl={currentArticle.imageUrl}
          title={currentArticle.title}
          publishedAt={currentArticle.publishedAt}
          desc={currentArticle.summary}
          redaMore={currentArticle.url}
        />
      </Modal>
    </Wrapper>
  );
};

export default Articles;
