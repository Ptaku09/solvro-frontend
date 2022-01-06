import React, { useEffect, useState } from 'react';
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
import useModal from 'hooks/useModal';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import useSpaceflightNewsByAmountApi from 'hooks/useSpaceflightNewsByAmountApi';
import axios from 'axios';

const Articles = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const [onPage, setOnPage] = useState(10);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [articlesData, isLoading, isError, setAmount] = useSpaceflightNewsByAmountApi();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth',
      });
    }, 250);
  }, []);

  const handleOnPageChange = (amount) => {
    setAmount(amount);
    setOnPage(amount);
  };

  const handleOpenArticleDetails = (id) => {
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`).then(({ data }) => {
      setCurrentArticle(data);
      handleOpenModal();
    });
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
      {isLoading ? (
        <Loading />
      ) : (
        <ContentWrapper>
          <SectionTitle>Discover Space</SectionTitle>
          <ArticlesWrapper>
            {!isError ? (
              articlesData.map(({ id, title, imageUrl }) => (
                <Article key={id} id={id} title={title} imgSrc={imageUrl} handleOpenArticleDetails={handleOpenArticleDetails} />
              ))
            ) : (
              <ErrorMessage message="Something went wrong 😩" subtitle="Try again later" />
            )}
          </ArticlesWrapper>
        </ContentWrapper>
      )}
      <Modal isOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <ArticleDetails
          imageUrl={currentArticle.imageUrl}
          title={currentArticle.title}
          publishedAt={currentArticle.publishedAt}
          desc={currentArticle.summary}
          readMore={currentArticle.url}
        />
      </Modal>
    </Wrapper>
  );
};

export default Articles;
