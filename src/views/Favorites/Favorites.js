import React, { useEffect, useState } from 'react';
import FavoriteElement from 'components/molecules/FavoriteElement/FavoriteElement';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { ContentWrapper, Redirect, Wrapper } from 'views/Favorites/Favorites.styles';
import { useGetArticleByIdMutation } from 'store';
import useModal from 'components/organisms/Modal/useModal';
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
    }, 500);
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
          <SectionTitle>
            No favorites :(
            <Redirect href="/articles">Go to articles</Redirect>
          </SectionTitle>
        ) : (
          <>
            <SectionTitle>Your Favorites</SectionTitle>
            {articlesId.map((item) => (
              <FavoriteElement key={item} id={item} handleOpenArticleDetails={handleOpenArticleDetails} />
            ))}
          </>
        )}
      </ContentWrapper>
      <Modal isOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <ArticleDetails data={currentArticle} />
      </Modal>
    </Wrapper>
  );
};

export default Favorites;
