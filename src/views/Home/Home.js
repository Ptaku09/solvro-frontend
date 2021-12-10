import React from 'react';
import Bookmark from 'components/molecules/Bookmark/Bookmark';
import { ReactComponent as BookmarkIcon } from 'assets/icons/bookmark-svgrepo-com.svg';
import { ReactComponent as AstronautIcon } from 'assets/icons/astronaut-svgrepo-com.svg';
import { ReactComponent as UniverseIcon } from 'assets/icons/universe-svgrepo-com.svg';
import { Wrapper } from 'views/Home/Home.styles';

const Home = () => {
  return (
    <Wrapper>
      <Bookmark title="Favorites" Icon={BookmarkIcon} redirectTo="/favorites" />
      <Bookmark title="New articles" Icon={AstronautIcon} redirectTo="/articles" />
      <Bookmark title="Check it out!" Icon={UniverseIcon} redirectTo="/random" />
    </Wrapper>
  );
};

export default Home;
