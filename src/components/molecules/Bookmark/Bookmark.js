import React from 'react';
import { ContentWrapper, StyledA, Wrapper } from 'components/molecules/Bookmark/Bookmark.styles';

const Bookmark = ({ redirectTo, title, Icon }) => {
  return (
    <Wrapper>
      <StyledA href={redirectTo}>
        <ContentWrapper>
          <Icon width="150px" />
          <h3>{title}</h3>
        </ContentWrapper>
      </StyledA>
    </Wrapper>
  );
};

export default Bookmark;
