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
        <StyledPhoto src={imageUrl} onClick={() => window.open(imageUrl, '_blank')} alt={title} />
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
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  readMore: PropTypes.string.isRequired,
};

export default ArticleDetails;
