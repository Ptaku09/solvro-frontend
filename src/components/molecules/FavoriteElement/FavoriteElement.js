import React, { useEffect, useState } from 'react';
import { ReactComponent as RemoveFavorite } from 'assets/icons/remove-button-svgrepo-com.svg';
import { useGetArticleByIdMutation } from 'store';
import styled from 'styled-components';
import { StyledReadMore } from 'components/atoms/StyledReadMore/StyledReadMore';

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: row;
  border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const Index = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const ButtonWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;

const StyledRemoveFavorite = styled(RemoveFavorite)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    fill: ${({ theme }) => theme.colors.grey};
    transform: translateY(-3px);
  }
`;

const FavoriteElement = ({ id, index }) => {
  const [getArticle] = useGetArticleByIdMutation();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const collectData = async () => {
      return await getArticle(id);
    };

    collectData().then((res) => setArticle(res.data));
  }, [getArticle, id]);

  return (
    <Wrapper>
      <Index>{index + 1}.</Index>
      <Title>{article.title}</Title>
      <ButtonWrapper>
        <StyledRemoveFavorite onClick={() => console.log('Removed')} />
        <StyledReadMore isBig onClick={() => console.log('Read more')} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FavoriteElement;
