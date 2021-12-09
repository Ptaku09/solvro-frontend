import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataWrapper, Info, Link, PhotoWrapper, StyledPhoto, StyledTitle, Wrapper } from 'components/molecules/ArticleDetails/ArticleDetails.styles';

const ArticleDetails = ({ data }) => {
  const [date, setDate] = useState({});

  useEffect(() => {
    setDate(new Date(data.publishedAt));
  }, [data.publishedAt]);

  return (
    <Wrapper>
      <PhotoWrapper>
        <StyledPhoto src={data.imageUrl} onClick={() => window.open(data.imageUrl, '_blank')} />
      </PhotoWrapper>
      <DataWrapper>
        <StyledTitle>{data.title}</StyledTitle>
        <Info>Added: {date.toLocaleString()}</Info>
        <p>{data.summary}</p>
        <Link onClick={() => window.open(data.url, '_blank')}>{data.url}</Link>
      </DataWrapper>
    </Wrapper>
  );
};

ArticleDetails.propTypes = {
  data: PropTypes.object,
};

export default ArticleDetails;
