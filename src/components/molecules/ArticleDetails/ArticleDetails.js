import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataWrapper, Info, Link, PhotoWrapper, StyledPhoto, StyledTitle, Wrapper } from 'components/molecules/ArticleDetails/ArticleDetails.styles';

const ArticleDetails = ({ imageUrl, title, publishedAt, desc, readMore }) => {
  const [date, setDate] = useState({});

  useEffect(() => {
    setDate(new Date(publishedAt));
  }, [publishedAt]);

  return (
    <Wrapper>
      <PhotoWrapper>
        <StyledPhoto src={imageUrl} onClick={() => window.open(imageUrl, '_blank')} />
      </PhotoWrapper>
      <DataWrapper>
        <StyledTitle>{title}</StyledTitle>
        <Info>Added: {date.toLocaleString()}</Info>
        <p>{desc}</p>
        <Link onClick={() => window.open(readMore, `${readMore}`)}>Read more...</Link>
      </DataWrapper>
    </Wrapper>
  );
};

ArticleDetails.propTypes = {
  data: PropTypes.object,
};

export default ArticleDetails;
