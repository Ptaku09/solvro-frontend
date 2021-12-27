import React, { useEffect, useState } from 'react';
import FavoriteElement from 'components/molecules/FavoriteElement/FavoriteElement';
import { ContentWrapper, Redirect, StyledSectionTitle, Wrapper } from 'views/Favorites/Favorites.styles';
import { useGetArticleByIdMutation } from 'store';
import useModal from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';

const Favorites = () => {
  const [articlesId, setArticlesId] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});
  const [getArticle] = useGetArticleByIdMutation();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    setArticlesId(data);

    setTimeout(() => {
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth',
      });
    }, 250);
  }, []);

  const handleOpenArticleDetails = async (id) => {
    const article = await getArticle(id);

    setCurrentArticle(article.data);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <ContentWrapper>
        {articlesId === null || articlesId.length === 0 ? (
          <StyledSectionTitle>
            No favorites :(
            <Redirect to="/articles">Go to articles</Redirect>
          </StyledSectionTitle>
        ) : (
          <>
            <StyledSectionTitle>Your Favorites</StyledSectionTitle>
            {articlesId.map((item) => (
              <FavoriteElement key={item} id={item} handleOpenArticleDetails={handleOpenArticleDetails} />
            ))}
          </>
        )}
      </ContentWrapper>
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

export default Favorites;
