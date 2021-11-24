import React from 'react';
import Bookmark from 'components/molecules/Bookmark/Bookmark';
import { ReactComponent as BookmarkIcon } from 'assets/icons/bookmark-svgrepo-com.svg';
import { ReactComponent as AstronautIcon } from 'assets/icons/astronaut-svgrepo-com.svg';
import { ReactComponent as UniverseIcon } from 'assets/icons/universe-svgrepo-com.svg';
import { Wrapper } from 'views/HomeScreen/HomeScreen.styles';

const HomeScreen = () => {
  return (
    <Wrapper>
      <Bookmark title="Favourites" Icon={BookmarkIcon} redirectTo="/test" />
      <Bookmark title="New articles" Icon={AstronautIcon} redirectTo="/test" />
      <Bookmark title="Check it out!" Icon={UniverseIcon} redirectTo="/test" />
    </Wrapper>
  );
};

export default HomeScreen;
