import React, { useEffect, useState } from 'react';
import { useGetArticleByIdMutation, useGetArticlesMutation } from 'store';
import Article from 'components/molecules/Article/Article';
import { Loading } from 'components/atoms/Loading/Loading';
import {
  Amount,
  ArticlesWrapper,
  ContentWrapper,
  Reload,
  StyledForm,
  StyledLabel,
  StyledReloadIcon,
  StyledSelect,
  Wrapper,
} from 'views/Articles/Articles.styles';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { Button } from 'components/atoms/Button/Button';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';

const Articles = () => {
  const [getArticles, props] = useGetArticlesMutation();
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});
  const [onPage, setOnPage] = useState(10);
  const { register, handleSubmit } = useForm();
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

  const handleOnPageChange = ({ amount }) => {
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
        <StyledForm onSubmit={handleSubmit(handleOnPageChange)}>
          <StyledLabel>On page: </StyledLabel>
          <StyledSelect {...register('amount', { required: true })}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </StyledSelect>
          <Button type="submit">Filter</Button>
        </StyledForm>
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
        <ArticleDetails data={currentArticle} />
      </Modal>
    </Wrapper>
  );
};

export default Articles;
