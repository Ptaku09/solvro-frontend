import React from 'react';
import { OptionWrapper, StyledA } from 'components/molecules/Bookmark/Bookmark.styles';

const Bookmark = ({ redirectTo, title, Icon }) => {
  return (
    <StyledA href={redirectTo}>
      <OptionWrapper>
        <Icon width="150px" />
        <h3>{title}</h3>
      </OptionWrapper>
    </StyledA>
  );
};

export default Bookmark;
